type ProductType = {
	id: number | string;
	name: string;
	description: string;
	price: number;
	oldPrice?: number;
	imageUrl: string;
	rating: number;
	availability: string;
	delivery: string;
	categoryId: number | string;
};

export default ProductType;