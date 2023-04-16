import React from 'react'
import "./Header.scss"
import  logoImg from "../assests/logo.png"
// import { Link } from '@mui/material'
import { Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
        <div className="row">
        <div className="logo">
                    <img src={logoImg} className="logopic"/>
                </div>
             
                <div className="navbar">
                    <Link className='linkroute' to={"/Home"}>HOME</Link>
                    <Link  className='linkroute' to={"/AddProduct"}>AddProduct</Link>
                    <Link className='linkroute' to={"/Cart"}>Cart</Link>
                    <Link className='linkroute' to={"/ProductDetails"}>Details</Link>
                    <Link className='linkroute' to={"/WishList"}>WishList</Link>
                           
                </div>
                <div className='account'>
                    <p> <a href='#'>Contact</a></p>
                     <AccountCircleIcon className='icon'/>
                </div>
        </div>

    </div>
  )
}

export default Header