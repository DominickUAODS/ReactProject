import { useState, useEffect } from "react";
import styles from "./FilterCategoryComponent.module.css";
import CategoryType from "../types/CategoryType";
import { useNavigate } from "react-router-dom";

interface FilterCategoryProps {
	onCategoryChange: (category: number | null) => void;
}

const FilterCategoryComponent: React.FC<FilterCategoryProps> = ({ onCategoryChange }) => {
	const categoriesUrl = import.meta.env.VITE_APP_CATEGORIES;
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		// fetch("http://localhost:3000/categories")
		fetch(categoriesUrl)
			.then((response) => response.json())
			.then((data: CategoryType[]) => {
				setCategories(data);
			});
	}, []);

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value === "" ? null : Number(e.target.value);
		setSelectedCategory(value);
		onCategoryChange(value);
		if (value !== null) {
			navigate(`/category/${value}`);
		} else {
			navigate(`/category`);
		}
	};

	return (
		<div className={styles.filterCategory}>
			<select id="category-select" value={selectedCategory ?? ""} onChange={handleCategoryChange}>
				<option value="">Всі категорії</option>
				{categories.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterCategoryComponent;
