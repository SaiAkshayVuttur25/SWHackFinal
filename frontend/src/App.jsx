import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/LoginPage.jsx/SignIn.jsx";
import SignUp from "./Components/LoginPage.jsx/SignUp.jsx";
import Cart from "./Components/Cart/Cart";
import PlaceOrder from "./Components/Placeorder/Placeorder";
import Booklist from "./Components/BooksList/BookList.jsx";
import ShopList from './Components/ShopList/ShopList';
import Products from "./Components/Products/Products.jsx";
import { CartProvider } from './context/CartContext';
import ProductDetail from "./Components/Products/ProductDetail.jsx";
import { ToastContainer } from "react-toastify";         // ✅ Toast
import "react-toastify/dist/ReactToastify.css";          // ✅ Toast CSS

function App() {
  const [login, setlogin] = useState(false);

  return (
    <CartProvider>
      {login && <SignIn setlogin={setlogin} />}
      <div className="app">
        <NavBar setlogin={setlogin} />

        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/signin" element={<SignIn setlogin={setlogin} />} />
          <Route path="/signup" element={<SignUp setlogin={setlogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/shops/:category" element={<ShopList />} />
          <Route path="/products/:shopId" element={<Products />} />
          <Route path="/product/:shopId/:productId" element={<ProductDetail />} />
        </Routes>
      </div>

      <Footer />

      <ToastContainer                           // ✅ Add ToastContainer here
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </CartProvider>
  );
}

export default App;
