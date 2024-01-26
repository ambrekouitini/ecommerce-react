import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../Providers/CartContext"; 
import styles from '../Style/Header.module.css';

export default function Header() {
    const { cart } = useCart(); 
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.headerLink}>Products</Link>
            <Link to="/cart" className={styles.headerLink}>
                Cart
                <span className={styles.cartCount}>{totalQuantity}</span>
            </Link>
        </div>
    );
}
