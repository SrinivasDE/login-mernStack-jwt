import React, { useContext, useState } from 'react';
import axios from 'axios';
import { store } from '../App';
import { Navigate } from 'react-router-dom';
import './register.css'

const Login = () => {
    const [token, setToken] = useContext(store); 
    const [data, setData] = useState({
        email:"",
        password:""
    });
    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5002/login', data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
       return <Navigate to='/myprofile' />
    }
  return (
    <div className='login'> 
        <center>
            <form onSubmit={submitHandler} autoComplete='off' >
                <h3>Login</h3><br /><br />
                <input onChange={changeHandler} type="email" name="email" placeholder='E-Mail' /><br />
                <input onChange={changeHandler} type="password" name="password" placeholder='Password' /><br />
                <input className='btn' type="submit" value='Login'  />
            </form>
        </center>
    </div>
  )
}

export default Login;