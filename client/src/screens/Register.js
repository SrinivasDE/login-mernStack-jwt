import React, { useState } from 'react';
import axios from 'axios';
import './register.css'

const Register = () => {
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    });
    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5002/register', data).then(
            res => alert(res.data)
        )
    }
  return (
    <div className='register'>
        <center>
            <form onSubmit={submitHandler} autoComplete='off'>
                <h3>Register </h3><br /><br />
                <input onChange={changeHandler} type="text" name="username" placeholder='User Name' /><br />
                <input onChange={changeHandler} type="email" name="email" placeholder='E-Mail'/><br />
                <input onChange={changeHandler} type="password" name="password" placeholder='Password'/><br />
                <input onChange={changeHandler} type="password" name="confirmpassword" placeholder='Confirm Password'/><br />
                <input className='btn' type="submit" value='Register' />
            </form>
        </center>
    </div>
  )
}

export default Register;