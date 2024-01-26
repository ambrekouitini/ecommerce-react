import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../Services/API";
import { useCart } from "../Providers/CartContext";
import styles from '../Style/Product.module.css';

export default function SingleProduct() {
    let { id } = useParams();
    let { data, isFetching } = useGetProductsQuery();
    const [quantity, setQuantity] = useState(1); 
    const { addToCart } = useCart(); 

    let product = data?.find((product) => product.id === id);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: parseInt(quantity) });
    };

    if (isFetching) return <h1>Loading...</h1>;
    if (!product) return <h1>Produit non trouvé</h1>;

    
    return (
        <div className={styles.productContainer}>
            <img 
                src={product.image} 
                alt={product.title} 
                className={styles.productImage} 
            />
            <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>Price: {product.price} €</p>
                {product.unit_of_measurement && (
                    <>
                        <p>Unit of Measurement: {product.unit_of_measurement}</p>
                        <p>Measure: {product.measure}</p>
                        <p>Price per Measure: {product.price_per_measure} €</p>
                    </>
                )}
                <div>
                    <label htmlFor="quantity">Quantity: </label>
                    <input 
                        type="number" 
                        id="quantity" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1"
                        className={styles.quantityInput}
                    />
                </div>
                <button 
                    onClick={handleAddToCart}
                    className={styles.addToCartButton}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
