import React, { useState } from 'react'
import "./Home.scss"
import {  Grid } from '@mui/material';
import productImg from "../assests/product2.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
// import RemoveFavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate,  useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Home() {
  const productList=JSON.parse(localStorage.getItem("productList"));
  // localStorage.removeItem("productList")
  const[productItems,setItems]=useState(productList);
  const[addToCart,setCart]=useState(JSON.parse(localStorage.getItem("cartItem")||[]));
  
  const addCart=(id)=>{
     let finddata=addToCart.find((item)=>{
        return item.id ===id;
    });
   if(finddata){
        let updatecartitem = addToCart.map((item)=>{
            if(item.id === id){
              if(item.quantity<=item.stock){
                item.quantity +=1;
                return item;
              }else{
                alert("out of stock")
                return item;
              }
            }else{
               
                return item;
            }
        });
        
        setCart(updatecartitem);
        //  console.log(addToCart)
        }else{
       let newitem = productItems.find((item)=>{
           return  item.id === id;
       });
        newitem.quantity = 1;
        setCart([...addToCart,newitem]);
       }
      //  alert("Product Added to Cart")
      notify();
    };
  localStorage.setItem("cartItem",JSON.stringify(addToCart))
// delete function

  const deleteItem = (id) => {
    setItems(()=>productItems.filter((item)=>item.id!= id))
    console.log(productItems)
    deleteNotify();
    
  };
  localStorage.setItem('productList', JSON.stringify(productItems));
  //wishlist function
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("wishList")||[]));
  // console.log(favorites)
  // const[isFavorites,setIsFavorites]=useState(false)
  // const toggleFavorite = (item) => {
  //   setIsFavorites(!isFavorites);
  //   if (isFavorites) {
  //     setFavorites([...favorites, item]);
  //     console.log("fav",favorites)
  //   } else {
  //     setFavorites(favorites.filter(f => f.id !== item.id));
  //     console.log("unfav",favorites)
  //   }
  // };


  // const favoriteFunction = (item) => {
  //   setIsFavorites(!isFavorites);
  //   if(isFavorites){
  //     setFavorites([...favorites, item]);
  //     console.log("fav",favorites)
  //   }else{
  //     const updatedFavorites = favorites.filter(fav => fav !== item);
  //      setFavorites(updatedFavorites);
  //      console.log("unfav",favorites)
  //   }
    
  // };
  const addToFavorites=(item)=> {
    setFavorites([...favorites, item]);
    console.log("fav",favorites)
  }

  
  const removeFromFavorites=(item)=> {
    const updatedFavorites = favorites.filter(fav => fav !== item);
    setFavorites(updatedFavorites);
    console.log("unfav",favorites)
  }

  
  localStorage.setItem("wishList",JSON.stringify(favorites));


  //productDetails
  let navigate=useNavigate()
  const goToProductDetails=()=>{
    navigate("/ProductDetails")
  }



  const[productDetails,setDetails]=useState("")
  const productDetailsFunc=(item)=>{
    setDetails(item);
    if(productDetails !=""){
    // console.log("product",productDetails)
    localStorage.setItem('productDetails', JSON.stringify(productDetails));
    goToProductDetails();
    }

  };
  const notify=()=>{
    toast('🦄 ADDED TO CART!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }
  const deleteNotify=()=>{
    toast.warn('Product is Deleted!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return (
    <div className="home">
   
      <Grid container spacing={2}>
        {productItems?.map((item,index)=>   <Grid  key={index} item xs={4}>
                  
                    <div className="productBox"  >
                      <img  className="productimg" src={productImg} alt="productimg" onClick={()=>productDetailsFunc(item)}/>
                        
                      <div className='productContent' >
                      <h3>{item.proname}</h3>
                        <p>{item.des}</p>
                        <h6>Price:${item.price}</h6>
                        <div className='productIcons'>
                                {/* <FavoriteIcon id="fav"/> */}
                                {/* <FavoriteIcon  onClick={() => {addToFavorites(item);removeFromFavorites(index);}} /> */}
                                {/* {isFavorites ? (
                                            <FavoriteIcon id="fav" onClick={()=>favoriteFunction(item)} />
                                          ) : (
                                            <FavoriteIcon  onClick={()=>favoriteFunction(item)} />
                                          )} */}
                                          {favorites.includes(item)? (
                                                <FavoriteIcon id="fav" onClick={()=>removeFromFavorites(item)}/>
                                              
                                            ) : (
                                             
                                              
                                              <FavoriteBorderIcon id="fav" onClick={()=>addToFavorites(item)}/>
                                            )}
                                <ShareIcon/>
                                <AddShoppingCartIcon onClick={()=>addCart(item.id)}/>
                                <ToastContainer/>
                                <DeleteIcon  onClick={()=>deleteItem(item.id)} />
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