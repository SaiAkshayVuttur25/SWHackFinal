// BookList.jsx
import React from 'react';
import './BookList.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/food.jpg';
import image2 from '../images/furniture.jpg';
import image3 from '../images/groceries.jpg';
import image4 from '../images/sports.jpg';

const categories = [
  { name: "Sports", image: image4 },
  { name: "Food", image: image1 },
  { name: "Furniture", image: image2 },
  { name: "Groceries", image: image3 },
];

const Booklist = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/shops/${category.toLowerCase()}`);
  };

  return (
    <div className="ExploreBooks" id="ExploreBooks">
      <h1>Explore Our Popular Categories</h1>
      <p className="text">Click on a category to find relevant shops</p>
      <div className="category-row">
        {categories.map((item, index) => (
          <div
            key={index}
            className="category-icon"
            onClick={() => handleClick(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default Booklist;
