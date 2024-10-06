import React, { useEffect, useState } from "react";
import styles from "./CartComponent.module.css";
import ProductToCartType from "../types/ProductToCart";

interface CartComponentProps {
    item: ProductToCartType;
    updateCartItem: (updatedItem: ProductToCartType) => void;
}

const CartComponent: React.FC<CartComponentProps> = ({ item, updateCartItem }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [totalPrice, setTotalPrice] = useState(item.commonSum);

    useEffect(() => {
        if (item) {
            const newTotalPrice = item.product.price * quantity;
            setTotalPrice(newTotalPrice);
            updateCartItem({
                ...item,
                quantity: quantity,
                commonSum: newTotalPrice,
            });
        }
    }, [quantity]);

    const increaseQuantity = () => {
        if (quantity < 9) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleDelete = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = currentCart.filter((cartItem: { product: { id: string | number; }; }) => cartItem.product.id !== item.product.id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateCartItem({
            ...item,
            quantity: 0,
            commonSum: 0,
        });
    };

    return (
        <div className={styles.cartItem}>
            <button className={styles.buttonDelete} onClick={handleDelete}>
                <span >Delete</span></button>
            <img
                src={`http://localhost:3000${item.product.imageUrl}`}
                alt={item.product.name}
                width="150"
                height="100"
            />
            <div className={styles.productInfo}>
                <h3 className={styles.itemDecs}>{item.product.description}</h3>
                {item.delivery ? (
                    <p className={styles.PorD}>Доставка: До відділення Нової Пошти</p>
                ) : (
                    <p className={styles.PorD} >Самовивіз: З відділення магазину</p>
                )}
            </div>
            <div className={styles.buttonsToCart}>
                <button
                    type="button"
                    className="button button-minus"
                    data-test="orderLineQuantityDecrease"
                    onClick={decreaseQuantity}
                >
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    className={styles.inputQ}
                    readOnly
                />
                <button
                    type="button"
                    className="button button-plus"
                    data-test="orderLineQuantityIncrease"
                    onClick={increaseQuantity}
                >
                    +
                </button>
            </div>
            <p className={styles.totalPr}>{totalPrice} ГРН</p>
        </div>
    );
};


export default CartComponent;
