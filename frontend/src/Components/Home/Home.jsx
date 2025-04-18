
import React, { useState , useEffect} from 'react';
import Header from '../Header/Header';
import './Home.css';
import Booklist from '../BooksList/BookList';
import Display from '../../DisplayOfAll/display';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Booklist category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
