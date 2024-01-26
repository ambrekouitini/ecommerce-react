import React from 'react';
import { useCart } from "../Providers/CartContext"; 
import Header from '../Components/Header';
import styles from '../Style/Cart.module.css'; 

export default function Panier() {
    const { cart, removeFromCart, clearCart, setCart } = useCart(); 
    const incrementQuantity = (item) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
            setCart(updatedCart); 
        }
    }

    const decrementQuantity = (item) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            setCart(updatedCart); 
        }
    }

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h1>Your Cart</h1>
                <p>Number of articles {totalItems}</p>
                <button onClick={clearCart}>Empty the shopping cart</button>
            </div>
            {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.details}>
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price} €</p>
                        <p>Total Price: {item.price * item.quantity} €</p>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => incrementQuantity(item)}>+</button>
                        <button onClick={() => decrementQuantity(item)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
            <div className={styles.total}>
                Total: {calculateTotal()} €
            </div>
        </div>
    );
}