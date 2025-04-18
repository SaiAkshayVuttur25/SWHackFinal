import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const dummyProducts = {
  SportyStore: [
    { id: 1, name: "Football", price: 500 },
    { id: 2, name: "Cricket Bat", price: 1000 }
  ],
  FitnessHub: [
    { id: 3, name: "Treadmill", price: 25000 },
    { id: 4, name: "Yoga Mat", price: 500 }
  ],
  "Tasty Treats": [
    { id: 5, name: "Burger", price: 120 },
    { id: 6, name: "Pizza", price: 300 }
  ],
  // ... add the rest if needed
};

const ProductDetail = () => {
  const { shopId, productId } = useParams();
  const { addToCart } = useCart();

  const product = dummyProducts[shopId]?.find(
    (prod) => prod.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
