import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsByCategory.module.css';
import ProductType from '../types/ProductType';


const ProductsByCategory: React.FC<{ selectedCategory: number }> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => product.categoryId === selectedCategory);

  return (
    <div className={styles.productList}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsByCategory;
