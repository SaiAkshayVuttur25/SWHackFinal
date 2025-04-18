// ShopList.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShopList.css';
import { Store } from 'lucide-react';

const dummyShops = {
  sports: ["SportyStore", "FitnessHub"],
  food: ["Tasty Treats", "Foodie's Paradise"],
  furniture: ["Comfy Homes", "StyleWood"],
  groceries: ["Daily Mart", "Grocery King"]
};

const ShopList = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const shops = dummyShops[category?.toLowerCase()] || [];

  const handleShopClick = (shop) => {
    navigate(`/products/${shop}`);
  };

  return (
    <div className="shop-list">
      <h2>Shops under <span className="category-name">{category}</span></h2>
      <div className="shop-grid">
        {shops.map((shop, index) => (
          <div key={index} className="shop-card" onClick={() => handleShopClick(shop)}>
            <Store size={32} />
            <span>{shop}</span>
          </div>
        ))}
        {shops.length === 0 && <p>No shops found for this category.</p>}
      </div>
    </div>
  );
};

export default ShopList;
