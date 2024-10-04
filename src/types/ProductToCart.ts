import ProductType from "./ProductType";

type ProductToCartType = {
	product: ProductType;
	quantity: number;
	commonSum: number;
	delivery: boolean;
	pickUp: boolean;
};

export default ProductToCartType;