import React, { useReducer } from 'react'
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Home from './Home/Home'
import ProductDetails from './ProductDetails/ProductDetails'
import Cart from './Cart/Cart'
import AddProduct from './AddProduct/AddProduct'
import WishList from './WishList/WishList'
import { stateContext } from './Context'
import { initialState, stateReducer } from './StateReducer'
import Header from './Header/Header'


function Routing() {
  const [state,dispatch]=useReducer(stateReducer,initialState);

  return (
    <stateContext.Provider value={{state,dispatch}}>
   <BrowserRouter>
   {state?.isLogin? (
    <>
     <div><Header/></div>
      
   <Routes>
          
    
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/AddProduct" element={<AddProduct/>}></Route>
          <Route path="/WishList" element={<WishList/>}></Route>
          <Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route>
   </Routes>
   </>):(
   <Routes>
           <Route path="/" element={<Login/>}></Route>
           <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
   </Routes>)}
   </BrowserRouter>
   </stateContext.Provider>
  )
}

export default Routing