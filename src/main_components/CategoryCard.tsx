import React from "react";
import styles from "./CategoryCard.module.css";
import CategoryType from "../types/CategoryType";

const CategoryCard: React.FC<CategoryType> = ({ name, imageUrl }) => {
	return (
		<div className={styles.card}>
			<div className={styles.categoryName}>{name}</div>
			<img src={`http://localhost:3000${imageUrl}`} alt={name} className={styles.image} />
			
		</div>
	);
};

export default CategoryCard;
