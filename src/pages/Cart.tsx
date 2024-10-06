import { useEffect, useState } from "react";
import ProductToCartType from "../types/ProductToCart";
import CartComponent from "../main_components/CartComponent.tsx";
import styles from "./Cart.module.css"
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<ProductToCartType[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    if (cartItems.length === 0) {
        return <div>Корзина пуста</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    const totalSum = cartItems.reduce((acc, item) => acc + item.commonSum, 0);

    const updateCartItem = (updatedItem: ProductToCartType) => {
        if (updatedItem.quantity === 0) {
            setCartItems((prevItems) => prevItems.filter(item => item.product.id !== updatedItem.product.id));
        } else {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.product.id === updatedItem.product.id ? updatedItem : item
                )
            );
        }
    };
    
    return (
        <div className={styles.cartPage}>
            {cartItems.map((item, index) => (
                <CartComponent updateCartItem={updateCartItem} key={index} item={item} />
            ))}
            <div className={styles.infoCart}>
                <div className={styles.infoCartText}>
                    <p>Усього: {totalSum} ГРН</p>
                    <p>Доставка 12-18 робочих днів</p>
                    <button className={styles.GoTo}>Продовжити</button>
                </div>
                <div className={styles.infoCartBtns}>
                    <button className={styles.GoBack} onClick={handleGoBack}>Продовжити покупки</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;