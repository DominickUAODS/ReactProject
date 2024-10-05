import { useState, useEffect } from "react";
import styles from "./FilterCategoryComponent.module.css";
import CategoryType from "../types/CategoryType";


interface FilterCategoryProps {
  onCategoryChange: (category: number | null) => void;
}

const FilterCategoryComponent: React.FC<FilterCategoryProps> = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data: CategoryType[]) => {
        setCategories(data);
      });
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : Number(e.target.value);
    setSelectedCategory(value);
    onCategoryChange(value); 
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
