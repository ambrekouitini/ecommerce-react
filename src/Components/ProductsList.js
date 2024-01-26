import React from 'react';
import { useGetProductsQuery } from "../Services/API";
import { useNavigate } from 'react-router-dom';
import styles from '../Style/ProductCard.module.css';

function ProductsList() {
    let { data, isFetching } = useGetProductsQuery();
    let navigate = useNavigate(); 

    if (isFetching) return <p>Loading...</p>;

    const navigateToProduct = (id) => {
        navigate(`/products/${id}`); 
    };

    return (
        <div className={styles.cardContainer}>
            {data.map((product) => (
                <div key={product.id} className={styles.card}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <span>{product.price} €</span>
                    <button onClick={() => navigateToProduct(product.id)}>View Product</button>
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
