import React, { useState } from 'react'
import "./AddProduct.scss"
import { Button, TextField } from '@mui/material'

function AddProduct() {
    const[productName,setProduct]=useState("");
    const[description,setDescription]=useState("");
    const[price,setPrice]=useState("");
    const[stock,setStock]=useState("");
    const[productList,setList]=useState(JSON.parse(localStorage.getItem('productList'))||[]);
    const[errorShow,setError]=useState(false);
    const[showError,setShowError]=useState('');
    // console.log("product",productName)
    //  console.log("des",description)
    //   console.log("price",price)
    //    console.log("stock",stock)
    const handlesubmit=(e)=>{
      e.preventDefault();
      setError(true)
      if(productName==="" || description==="" || price===""|| stock===""){
        setShowError("Fields should be filled !!!!")
        return};
      setList([...productList,{ id:Math.floor(Math.random()*10),proname:productName,des:description,price:price,stock:stock}])
      console.log(productList)
      alert("Product is Added")
    }
    localStorage.setItem('productList', JSON.stringify(productList));

  return (
    <form className='addProductBox' onSubmit={handlesubmit}>
          <TextField className='inputbox'  onChange={(e)=>setProduct(e.target.value)} id="outlined-basic" label="ProductName" variant="outlined"  size="small" fullWidth/>
          <TextField  className='inputbox' onChange={(e)=>setDescription(e.target.value)} id="outlined-basic" label="Description" variant="outlined" size="small"  fullWidth/>
          <TextField  className='inputbox' onChange={(e)=>setPrice(e.target.value)} id="outlined-number" label="Price" type="number" variant="outlined" size="small" fullWidth/>
          <TextField className='inputbox'  onChange={(e)=>setStock(e.target.value)} id="outlined-number" label="Stock" type="number" variant="outlined" size="small" fullWidth/>
          <Button  className='addbtn' variant="contained" type="submit">AddProduct</Button>
          {showError && <div className='error'>{showError}</div>}
    </form>
   
  )
}

export default AddProduct