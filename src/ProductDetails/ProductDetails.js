import React from 'react'
import "./ProductDetails.scss"
import productImg from "../assests/product2.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

function ProductDetails() {
  const productDetail=JSON.parse(localStorage.getItem("productDetails"))
  console.log("productDetails",productDetail)
  // const[productDetails,setDetails]=(productDetail)
  return (
    <div>ProductDetails:
    
       <div className='productDetailBox'>
          <div className='productImage'>
            <img src={productImg} alt="productImg"/>
          </div>
          <div className='productContent'>
             <h3> ProuductName:{productDetail.proname}</h3>
             <p>Description: {productDetail.des}</p>
             <h5> PRICE:${productDetail.price}</h5>
             <h6>STOCK:{productDetail.stock}</h6>
             <div className='productIcon'>
                <FavoriteIcon className='icon'/>
                <ShareIcon className='icon'/>
                <AddShoppingCartIcon className='icon'/>
              </div>
          </div>
       </div>
    
    </div>
  )
}

export default ProductDetails