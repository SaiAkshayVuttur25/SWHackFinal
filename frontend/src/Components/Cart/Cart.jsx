import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <div>
                <p style={styles.name}>{item.name}</p>
                <p style={styles.quantity}>Quantity: {item.quantity}</p>
              </div>
              <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <button style={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  empty: {
    fontSize: '16px',
    color: '#666',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  },
  name: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  quantity: {
    fontSize: '14px',
    color: '#555',
  },
  removeBtn: {
    padding: '6px 12px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  clearBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Cart;
