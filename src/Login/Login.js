import React from 'react'
import "./Login.scss"
import { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import User.json from json;
import { stateContext } from '../Context';


const Login = () => {
  const {state,dispatch}=useContext(stateContext);
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [error, setError] = useState('');
        let User=require('../User.json');
        // console.log(User)
    
//go to home function
        let navigate=useNavigate();
        const gotohome=()=>{
           navigate("/Home")
        }
//login function and validation
      
        const handleLogin = (event) => {
          event.preventDefault();
          const user = User.find((user) => user.username === username);
          if (username === '' || password === '') {
            setError('Please fill in all fields.');
          } else if (!user) {
            setError('Invalid username.');
          } else if (user.password != password) {
            setError('Incorrect password.');
         } else {
            localStorage.setItem("isLogin",JSON.stringify(true))
            dispatch({type:"LOGIN",payload:true})
            gotohome();
          }
        };


  return (
    <form onSubmit={handleLogin} className='formbox'>
   
      <label className='labelbox'>Username:</label>
      <input className='inputbox'
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      /><br/>
   
    
      <label className='labelbox'>Password:</label>
      <input className='inputbox'
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /><br/>
   
   
   
      <button className='loginbtn' type="submit">Login</button>
   
    {error && <div className='errorshow'>{error}</div>}
  </form>
);
  }

  
export default Login