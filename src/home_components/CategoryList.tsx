import React, { useEffect, useState } from "react";
import CategoryCard from "../main_components/CategoryCard";
import styles from "./CategoryList.module.css";
import CategoryType from "../types/CategoryType";

const CategoryList: React.FC = () => {
	const [categories, setCategories] = useState<CategoryType[]>([]);

	useEffect(() => {
		fetch("http://localhost:3000/categories")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div className={styles.categoriesDiv}>
      <div className={styles.frontpageCategory}>
        <p className="h1">Категорії товарів</p>
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
	);
};

export default CategoryList;
