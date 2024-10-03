import React from "react";
import styles from "./MenuElement.module.css";
import CategoryType from "../types/CategoryType";
import { useNavigate } from "react-router-dom";

interface MenuElementProps {
	categories: CategoryType[];
}

const MenuElement: React.FC<MenuElementProps> = ({ categories }) => {
	const navigate = useNavigate();

	const handleClick = (id: number | string | undefined) => {
		navigate(`/category/${id}`);
	};

	return (
		<div className={styles.menusidebar}>
			<div className={styles.logo}>
			<img src="http://localhost:3000/images/jysk-logo.svg"  width="81" height="37" alt="JYSK" />
			</div>
			<ul>
				{categories.map(category => (
					<li key={category.id} onClick={() => handleClick(category.id)}>
						<span>{category.name}</span>
						<span className={styles.arrow}>〉</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuElement;
