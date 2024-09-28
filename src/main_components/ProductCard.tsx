import React from "react";
import styles from "./ProductCard.module.css";
import ProductType from "../types/ProductType";

const ProductCard: React.FC<ProductType> = ({ name, description, price, oldPrice, imageUrl, rating, availability, delivery }) => {
	
	const discountPercentage = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				{discountPercentage && <span className={styles.discountBadge}>-{discountPercentage}%</span>}
				<img src={`http://localhost:3000${imageUrl}`} alt={name} className={styles.image} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.priceSection}>
					{oldPrice && <p className={styles.oldPrice}>{oldPrice} ГРН.</p>}
					<p className={styles.price}>{price} ГРН./шт</p>
				</div>
				<div className={styles.rating}>
					{Array.from({ length: 5 }, (_, index) => (
						<span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>
							★
						</span>
					))}
				</div>
				<p className={styles.availability}>{availability}</p>
				<p className={styles.delivery}>{delivery}</p>
			</div>
		</div>
	);
};

export default ProductCard;
