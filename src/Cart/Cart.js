import React, { useState } from 'react'
import "./Cart.scss"
import {  Grid } from '@mui/material';
import productImg from "../assests/product2.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShareIcon from '@mui/icons-material/Share';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
function Cart() {
  const cartItem=JSON.parse(localStorage.getItem("cartItem"))
  const [cartlist,setList]=useState(cartItem||[]);
//addFunction
  function add(id){
    let finddata=cartlist.find((item)=>{
        return item.id ===id;
    });
   if(finddata){
        let updatecartitem = cartlist.find((item)=>{
            if(item.id === id){
                item.quantity +=1;
                return item;
            }else{
                return item;
            }
        });
       setList([...cartlist,updatecartitem])
          }else{
       let newitem = cartlist.find((item)=>{
           return  item.id === id;
       });
        newitem.quantity = 1;
        setList([...cartlist,newitem]);
        }
};
//decrement function
function decrement(id){
    let finddata=cartlist.find((item)=>{
        return item.id ===id;
    });
   if(finddata){
      if(finddata.quantity===1){
        let updatecartitem=cartlist.filter((item)=>{
            return item.id !== id;
        });
        setList([...cartlist,updatecartitem]);
       
      }else{
        let updatecartitem=cartlist.find((item)=>{
            if (item.id ===id){
                item.quantity -= 1;
                return item;
            }else 
            return item
        })
        setList([...cartlist,updatecartitem]);
      }
}
};

  return (
    <div>Cart:
        <Grid container spacing={2}>
        {cartlist?.map((item,index)=>   <Grid  key={index} item xs={4}>
                  
                    <div className="productBox" >
                      <img  className="productimg" src={productImg} alt="productimg"/>
                      <div className='productContent'>
                        <h3>{item.proname}</h3>
                        <p>{item.des}</p>
                        <h6>Price:${item.price}</h6>
                        <div className='productIcons'>
                                <FavoriteIcon id="fav"/>
                                <ShareIcon/>
                                <AddCircleIcon onClick={()=>add(item.id)} />
                                {item.quantity}
                                <RemoveCircleIcon onClick={()=>decrement(item.id)} />
                               
                               
                        </div>
                      </div>
                    </div>
                
                 
            </Grid>
        )}
            
        </Grid>
    </div>
  )
}

export default Cart