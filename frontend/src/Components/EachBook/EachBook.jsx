import React, { useContext, useState } from 'react'
import './EachBook.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/storecontext';


const EachBook = ({id,name,image,price,description,}) => {
    //now let us remove this
    //const [Count,SetCount] = useState(0);
    
    const  {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='EachBook'>
      <div className="container">
        <img src={image} alt="" />
        {!cartItem[id] ? 
        <img className="add" onClick={()=>{addToCart(id)}} src={assets.add}/> :
        <div className="foodCounter">
            <img onClick={()=>{removeFromCart(id)}} src={assets.red_remove}/>
            <p>{cartItem[id]}</p>
            <img onClick={()=>{addToCart(id)}} src={assets.green_add}/>
        </div>
        }
      </div>

      <div className="info">
        <div className="item-with-star">
            <p className='Name'>{name}</p>
            <div className="stars">
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
            </div>

        </div>
        <p className='Description'>{description}</p>
        <div className="price">{price}</div>
      </div>
    </div>
  )
}

export default EachBook
/*
thought of generating stars randomly
import React from 'react';
import './EachBook.css';
import { assets } from '../../assets/assets';

const EachBook = ({ id, name, image, price, description }) => {
    const stars = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5

    return (
        <div className='EachBook'>
            <div className="container">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <div className="item-with-star">
                    <p className='Name'>{name}</p>
                    {Array.from({ length: stars }).map((_, index) => (
                        <img key={index} src={assets.star} alt="star" />
                    ))}
                </div>
                <p className='Description'>{description}</p>
                <div className="price">{price}</div>
            </div>
        </div>
    );
};

export default EachBook;

*/