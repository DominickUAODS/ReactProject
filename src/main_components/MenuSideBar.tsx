import React, { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";
import MenuElement from "./MenuElement";
import { createPortal } from "react-dom";
import styles from './MenuSideBar.module.css';

const MenuSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
	const categoriesUrl = import.meta.env.VITE_APP_CATEGORIES;
	const modalNode: HTMLElement | null = document.getElementById("modalMenuSidebar");
	const [categories, setCategories] = useState<CategoryType[]>([]);

	useEffect(() => {
		// fetch("http://localhost:3000/categories")
		fetch(categoriesUrl)
			.then((response) => response.json())
			.then((data) => setCategories(data));
	}, []);

	return modalNode ? createPortal(
		<div className="background" onClick={onClose}>
			<div className={`${styles.menusidebar} ${isOpen ? styles.open : ''}`} >
				<button className={styles.modal__close} onClick={onClose}>&times;</button>
				<MenuElement categories={categories} />
			</div>
		</div>,
		modalNode
	) : null
};

export default MenuSidebar;
