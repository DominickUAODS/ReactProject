import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./CategoryCard.module.css";
import CategoryType from "../types/CategoryType";

const CategoryCard: React.FC<CategoryType> = ({ id, name, imageUrl }) => {
	const navigate = useNavigate();

	// const handleClick:MouseEventHandler = (e:MouseEvent<HTMLButtonElement>) => {
	// 	const target = e.target as HTMLButtonElement;
	// 	const id = target.dataset.id;
	// 	navigate(`${id}`);
	// } 

	const handleClick = () => {
		navigate(`/category/${id}`);
	  };
	
	return (
		<div className={styles.card} onClick={handleClick}>
			<div className={styles.categoryName}>{name}</div>
			<img src={`http://localhost:3000${imageUrl}`} alt={name} className={styles.image} />
			
		</div>
	);
};

export default CategoryCard;
