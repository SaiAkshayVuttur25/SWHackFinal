// Products.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import { Package, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  "Foodie's Paradise": [
    { id: 7, name: "Pasta", price: 200 },
    { id: 8, name: "Salad", price: 150 }
  ],
  "Comfy Homes": [
    { id: 9, name: "Sofa", price: 10000 },
    { id: 10, name: "Bed", price: 15000 }
  ],
  StyleWood: [
    { id: 11, name: "Chair", price: 800 },
    { id: 12, name: "Table", price: 1800 }
  ],
  DailyMart: [
    { id: 13, name: "Milk", price: 50 },
    { id: 14, name: "Bread", price: 40 }
  ],
  GroceryKing: [
    { id: 15, name: "Rice", price: 600 },
    { id: 16, name: "Oil", price: 150 }
  ]
};

const Products = () => {
  const { shopId } = useParams();
  const { cart = [], addToCart } = useCart();
  const products = dummyProducts[shopId] || [];

  const getQuantity = (productId) => {
    if (!Array.isArray(cart)) return 0;
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className="product-list">
      <h2>
        Products available at <span className="shop-name">{shopId}</span>
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Package size={28} />
            <span>{product.name}</span>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              <Plus size={16} /> Add
              {getQuantity(product.id) > 0 && (
                <span style={{ marginLeft: '6px', fontWeight: 'bold' }}>
                  ({getQuantity(product.id)})
                </span>
              )}
            </button>
          </div>
        ))}
        {products.length === 0 && <p>No products found for this shop.</p>}
      </div>
    </div>
  );
};

export default Products;