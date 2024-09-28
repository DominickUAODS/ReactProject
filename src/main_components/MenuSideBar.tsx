import React, { useEffect, useState } from "react";
import CategoryType from "../types/CategoryType";
import MenuElement from "./MenuElement";

const MenuSidebar: React.FC = () => {
	const [categories, setCategories] = useState<CategoryType[]>([]);

	useEffect(() => {
		fetch("http://localhost:3000/categories")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div className="">
			<MenuElement categories={categories} />
		</div>
	);
};

export default MenuSidebar;