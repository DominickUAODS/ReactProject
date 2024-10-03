import BannerComponent from "../home_components/BannerComponent";
import CategoryList from "../home_components/CategoryList";
import "./HomeJysk.css"

const HomeJysk = () => {
	return (
		<div className ="homePage">
			<div className="banner">
				<BannerComponent/>
			</div>
			<div className="category-list">
			<CategoryList />
			</div>
		</div>
		);
};

export default HomeJysk;
