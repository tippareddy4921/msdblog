import { Link } from "react-router-dom"
import "./login.css"
import {useContext, useRef} from 'react';

import axios from "axios";
import { Context } from "../../context/Context";

function Login() {

const userRef=useRef();
const passwordRef=useRef();
const {dispatch,isFetching}=useContext(Context);

const handleSubmit= async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
        const res= await axios.post("http://localhost:5000/api/auth/login",{
            username:userRef.current.value,
            password:passwordRef.current.value,
        })   ;
        // console.log(res)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAILURE"});

    }
};
  

    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username..."
                    ref={userRef} />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" 
                    ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegister">
                <Link to={"/register"}>REGISTER</Link></button>
        </div>
    )
}

export default Login
