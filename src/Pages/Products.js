import React from 'react';
import Header from "../Components/Header";
import ProductsList from '../Components/ProductsList'; 
import styles from '../Style/ProductPage.module.css';


export default function ProductsPage() {
    return (
        <div>
            <Header />
            <div className={styles.productPageContainer}>
                <h1 className={styles.pageTitle}>All Products</h1>
                <p className={styles.pageSubtitle}>Welcome to our product selection! Browse through a wide variety of items and find what you need.</p>
                <ProductsList />
            </div>
        </div>
    );
}
