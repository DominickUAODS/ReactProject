import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductType from "../types/ProductType";
import styles from "./ProductDetail.module.css"
import greenCirc from "../assets/img/greenCirc.png";
import yellowCirc from "../assets/img/yellowCirc.png";



const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        if (!response.ok) {
          throw new Error("Ошибка загрузки продуктов");
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }
  const handleDeliveryChange = () => {
    setSelectedOption("delivery");
  };

  const handlePickupChange = () => {
    setSelectedOption("pickup");
  };

  return (
    <div className={styles.PageProdDet}>
    <div className={styles.productPage}>
      <div className={styles.productPageBlock1}>
        <img
          src={`http://localhost:3000${product.imageUrl}`}
          width="550"
          height="360"
          aria-label=""
          alt={product.name}
        />
      </div>
      <div className={styles.productPageBlock2}>
        <h1>{product.name}</h1>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.rating}>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < product.rating ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </div>
        <p className={styles.actualPrice}>{product.price} ГРН</p>
        {product.oldPrice && <p className={styles.oldPrice}>{product.oldPrice} ГРН</p>}
        <div className={styles.deliverySelectorContainer}>
          <hr />
            <div className={styles.productFamilySelect}>Доставка чи самовивіз?
            </div>
              <div className={styles.blockDelivery}>
                <div className={styles.radioBtnDelivery}>
                  <input
                    type="radio"
                    name="deliveryOption"
                    checked={selectedOption === "delivery"} 
                    onChange={handleDeliveryChange} 
                  />
                  <span className={styles.spanRadio}>Доставка</span>
                </div>
                  <div className={styles.deliveryBlock}>
                    <img
                      className={styles.imgAv}
                      role="img"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      aria-label=""
                      src={product.isInDelivery ? greenCirc : yellowCirc}
                    />
                    <span className={styles.productDelivery}>{product.delivery}</span>
                  </div>
                </div>
              <div className={styles.blockPickUp}>
                <div className={styles.radioBtnPickup}>
                  <input
                    type="radio"
                    name="deliveryOption"
                    checked={selectedOption === "pickup"} 
                    onChange={handlePickupChange} 
                  />
                  <span className={styles.spanRadio}>Замов та забери</span>
                </div>
                  <div className={styles.deliveryBlock}>
                    <img
                      className={styles.imgAv}
                      role="img"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      aria-label=""
                      src={product.isAvialibale ? greenCirc : yellowCirc}
                    />
                    <span className={styles.productAviable}>{product.availability}</span>
                  </div>
                </div>
              </div>
              <div className={styles.buttonsToCart}>
              <div className={styles.btnProductQuantity}>
                <button type="button" className="button button-minus" data-test="orderLineQuantityDecrease">-</button>
                <input type="number" value="1" className={styles.inputQ}/>
                <button type="button" className="button button-plus" data-test="orderLineQuantityIncrease">+</button>
              </div>
              <button className={styles.buttonGoToCart} type="button">
                <span className="button-text">Додати до кошика</span>
              </button>
              </div>
              <hr/>
            </div>
          </div>
          <div className={styles.Desc}>
              <span className={styles.DescMain}>Опис</span>
              <span className={styles.DescFull}>{product.fullDesc}</span>
            </div>
          </div>
  );
};

export default ProductDetail;


