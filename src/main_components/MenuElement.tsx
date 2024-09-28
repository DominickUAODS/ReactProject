import React from "react";
import "./MenuElement.module.css";
import CategoryType from "../types/CategoryType";

interface MenuElementProps {
	categories: CategoryType[];
}

const MenuElement: React.FC<MenuElementProps> = ({ categories }) => {
	return (
		<div className="menusidebar">
			<div className="logo">
				<img src="http://localhost:3000/images/jysk-logo.svg" width="81" height="37" alt="JYSK" />
			</div>
			<ul>
				{categories.map(category => (
					<li key={category.id}>
						<span>{category.name}</span>
						<span className="arrow">〉</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuElement;