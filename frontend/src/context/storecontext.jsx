import { createContext, useEffect, useState } from "react";
import { ListOfBooks } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem , SetCartItem]=useState({});

    const addToCart = (itemId)=>{
        if(!cartItem[itemId]){
            SetCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        if(cartItem[itemId]){
            SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
    }

    useEffect(()=>{
        console.log(cartItem);
        
    },[cartItem])

    const contextValue = {
        ListOfBooks,
        cartItem,
        SetCartItem,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
/*
    my app didnt even start

        <StoreContextProvider value={contextValue}>
            {props.children}
        </StoreContextProvider>
*/