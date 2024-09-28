import ProductsByCategory from "../main_components/ProductsByCategory";
import CategoryType from "../types/CategoryType";

const Category: React.FC<CategoryType> = ({ id }) => {
	return (
		<>
			<ProductsByCategory selectedCategory={id}/>
		</>
	);
};

export default Category;
