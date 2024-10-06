import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ProductCard from "./ProductCard";
import styles from "./ProductCard.module.css";
import stylesP from "./ProductsByCategory.module.css";

const SearchResultsPage: React.FC = () => {
	const productsUrl = import.meta.env.VITE_APP_PRODUCTS;
	const location = useLocation();
	const { query } = queryString.parse(location.search);
	const [products, setProducts] = useState<any[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	// load from server
	const fetchProducts = async () => {
		try {
			// const response = await fetch("http://localhost:3000/products");
			const response = await fetch(productsUrl);
			if (!response.ok) {
				throw new Error("Ошибка при загрузке данных");
			}
			const data = await response.json();
			setProducts(data);
			setLoading(false);
		} catch (err: any) {
			setError(err.message);
			setLoading(false);
		}
	};

	// add filter
	const filterProducts = (query: string, products: any[]) => {
		return products.filter((product) => {
			const matchesName = product.name.toLowerCase().includes(query.toLowerCase());
			const matchesDescription = product.description.toLowerCase().includes(query.toLowerCase());
			return matchesName || matchesDescription;
		});
	};

	// first render
	useEffect(() => {
		fetchProducts();
	}, []);

	// filter after loading
	useEffect(() => {
		if (products.length > 0 && query) {
			setFilteredProducts(filterProducts(query as string, products));
		}
	}, [products, query]);

	return (
		<div>
			<h2>Результати пошуку для: "{query}"</h2>
			{loading && <p>Завантаження...</p>}
			{error && <p>{error}</p>}
			{!loading && filteredProducts.length > 0 ? (
				<div className={stylesP.productList}>
					<div className={stylesP.productsByCat}>
						{filteredProducts.map((product) => (
							<div className={styles.productCard}>
								<ProductCard key={product.id} {...product} />
							</div>
						))}
					</div>
				</div>
			) : (
				!loading && <p>Немає результатів для "{query}".</p>
			)}
		</div>
	);
};

export default SearchResultsPage;
