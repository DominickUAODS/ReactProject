import { useParams } from "react-router-dom";
import ProductsByCategory from "../main_components/ProductsByCategory";
// import CategoryType from "../types/CategoryType";

const Category: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<>
			<ProductsByCategory selectedCategory={Number(id)} />
		</>
	);
};

export default Category;
