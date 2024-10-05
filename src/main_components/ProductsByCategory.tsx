import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsByCategory.module.css';
import ProductType from '../types/ProductType';
import FilterPriceComponent from './FilterPriceComponent';
import FilterCategoryComponent from './FilterCategoryComponent';

const ProductsByCategory: React.FC = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
	const [minPrice, setMinPrice] = useState<number | null>(null);
	const [maxPrice, setMaxPrice] = useState<number | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
	useEffect(() => {
	  fetch("http://localhost:3000/products")
		.then((response) => response.json())
		.then((data: ProductType[]) => {
		  setProducts(data);
		});
	}, []);
  
	// Функция для применения фильтров
	const applyFilters = () => {
	  let filtered = products;
  
	  // Фильтр по категории
	  if (selectedCategory) {
		filtered = filtered.filter(product => product.categoryId === selectedCategory);
	  }
  
	  // Фильтр по цене
	  if (minPrice !== null) {
		filtered = filtered.filter(product => product.price >= minPrice);
	  }
  
	  if (maxPrice !== null) {
		filtered = filtered.filter(product => product.price <= maxPrice);
	  }
  
	  setFilteredProducts(filtered);
	};
  
	// Обновление при изменении фильтров
	useEffect(() => {
	  applyFilters();
	}, [products, minPrice, maxPrice, selectedCategory]);
  
	// Обработка фильтров
	const handlePriceFilter = (min: number, max: number) => {
	  setMinPrice(min);
	  setMaxPrice(max);
	};
  
	const handleCategoryChange = (category: number | null) => {
	  setSelectedCategory(category);
	};
  
	return (
	  <div className={styles.productList}>
		<div className={styles.filters}>
		<div className={styles.prFilter}>
		<FilterPriceComponent onApplyFilter={handlePriceFilter} />
		</div>
		<div className={styles.ctFilter}>
		<FilterCategoryComponent onCategoryChange={handleCategoryChange} />
		</div>
		</div>
		<div className={styles.productsByCat}>
		{filteredProducts.map((product) => (
			<div className={styles.productCard}>
		  <ProductCard key={product.id} {...product} />
		  </div>
		))}
		</div>
	  </div>
	);
  };

export default ProductsByCategory;

