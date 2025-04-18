/*import React, { useContext } from 'react'
import './display.css'
import { StoreContext } from '../context/storecontext'

const Display = ({category}) => {
    const {booksList} = useContext(StoreContext);

  return (
    <div className='Display' id='display'>
      <h2>Frequently Ordered Books For You</h2>
    </div>
  )
}

export default Display
*/
import React, { useContext } from 'react';
import './display.css';
import { StoreContext } from '../context/storecontext';
import EachBook from '../Components/EachBook/EachBook';

const Display = ({ category }) => {
    const { ListOfBooks } = useContext(StoreContext);

    //const filteredBooks = category === "All" ? ListOfBooks : ListOfBooks.filter(book => book.category === category);

    return (
        <div className='Display' id='display'>
            <h2>Frequently Ordered Books For You</h2>
            <div className="book-list">
                {ListOfBooks.map((item,index)=>{
                  if(category==="All" || category===item.category){
                    return <EachBook key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                  }
                })}
            </div>
        </div>
    );
};

export default Display;
