import React, { useState } from 'react'
import "./WishList.scss"
import {  Grid } from '@mui/material';
import productImg from "../assests/product2.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function WishList() {
  const wishList=JSON.parse(localStorage.getItem("wishList"))
  // localStorage.removeItem("wishList")
  console.log("wish",wishList)
//favorites functions
  const [favorites, setFavorites] = useState(wishList);
  // console.log(favorites)
  const addToFavorites=(item)=> {
    setFavorites([...favorites, item]);
    console.log("fav",favorites)
  }
  const removeFromFavorites=(item)=> {
    const updatedFavorites = favorites.filter(fav => fav !== item);
    setFavorites(updatedFavorites);
    console.log("unfav",favorites)
  }
  localStorage.setItem("wishList",JSON.stringify(favorites))
  return (
    <div>WishList:
       <Grid container spacing={2}>
        {favorites?.map((item,index)=>   <Grid  key={index} item xs={4}>
                  
                    <div className="productBox" >
                      <img  className="productimg" src={productImg} alt="productimg"/>
                      <div className='productContent'>
                        <h3>{item.proname}</h3>
                        <p>{item.des}</p>
                        <h6>Price:${item.price}</h6>
                        <div className='productIcons'>
                        {favorites.includes(item)? (
                                                <FavoriteIcon id="fav" onClick={()=>removeFromFavorites(item)}/>
                                              
                                            ) : (
                                             
                                              
                                              <FavoriteBorderIcon id="fav" onClick={()=>addToFavorites(item)}/>
                                            )}
                                <ShareIcon/>
                                <AddShoppingCartIcon/>
                         </div>
                      </div>
                    </div>
             </Grid>
        )}
            
        </Grid>
    </div>
  )
}

export default WishList