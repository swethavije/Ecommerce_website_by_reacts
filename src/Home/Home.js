import React, { useState } from 'react'
import "./Home.scss"
import {  Grid } from '@mui/material';
import productImg from "../assests/product2.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

function Home() {
  const productList=JSON.parse(localStorage.getItem("productList"));
  // localStorage.removeItem("productList")
  const[productItems,setItems]=useState(productList);
  const[addToCart,setCart]=useState([])
  // const addCart=(item)=> {
  //   setCart([...addToCart, item]);
    
  // }
  
  const addCart=(id)=>{
     let finddata=addToCart.find((item)=>{
        return item.id ===id;
    });
   if(finddata){
        let updatecartitem = addToCart.map((item)=>{
            if(item.id === id){
                item.quantity +=1;
                return item;

            }else{
                return item;
            }
        });
        
        setCart([...addToCart,updatecartitem]);
        //  console.log(addToCart)
        }else{
       let newitem = productItems.find((item)=>{
           return  item.id === id;
       });
        newitem.quantity = 1;
        setCart([...addToCart,newitem]);
       }
    };
  localStorage.setItem("cartItem",JSON.stringify(addToCart))
  // const [favorites, setFavorites] = useState([]);
  // const addToFavorites=(item)=> {
  //   setFavorites([...favorites, item]);
    
  // }

  
  // const removeFromFavorites=(item)=> {
  //   const updatedFavorites = favorites.filter(fav => fav !== item);
  //   setFavorites(updatedFavorites);
  // }
  // console.log("fav",favorites)
  // localStorage.setItem("favorties",JSON.stringify(favorites))
  // localStorage.removeItem("favorties")

  return (
    <div className="home">
   
      <Grid container spacing={2}>
        {productItems?.map((item,index)=>   <Grid  key={index} item xs={4}>
                  
                    <div className="productBox"  >
                      <img  className="productimg" src={productImg} alt="productimg"/>
                        
                      <div className='productContent' id={index+1} >
                      <h3>{item.proname}</h3>
                        <p>{item.des}</p>
                        <h6>Price:${item.price}</h6>
                        <div className='productIcons'>
                                <FavoriteIcon id="fav"/>
                                {/* <FavoriteIcon  onClick={() => {addToFavorites(item);removeFromFavorites(index);}} /> */}
                                {/* {favorites.includes(item) ? (
                                            <FavoriteIcon onClick={() => removeFromFavorites(item)} />
                                          ) : (
                                            <FavoriteIcon id="fav" onClick={() => addToFavorites(item)} />
                                          )} */}
                                <ShareIcon/>
                                <AddShoppingCartIcon onClick={()=>addCart(item.id)}/>
                        </div>
                      </div>
                    </div>
                
                 
            </Grid>
        )}
            
        </Grid>
       
       

    </div>
  )
}

export default Home