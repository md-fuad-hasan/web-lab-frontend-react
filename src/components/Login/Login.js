import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Login.css';
import { Link } from 'react-router-dom';
import { login_user, signup_error, signup_finished } from '../../redux/authActionCreators';
import ErrMsgShow from '../ErrMsgShow/ErrMsgShow';

function Login() {
    const [roll, setRoll] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const loginErr = useSelector(state=>state.loginErr);
    const signupSuccess = useSelector(state=>state.signupSuccess);

    useEffect(()=>{
        dispatch(signup_error(null))
    },[]);

    
    if(signupSuccess){
        dispatch(signup_finished())
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(login_user(roll,password));
       
    }


  return (
    <div>
        <div className='withMsg main'>

        <div className='m-2'>
            {loginErr ? <ErrMsgShow errMsg={loginErr} /> : null}
        </div>
        <div className="wrapper">
       
            <h2>Student Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="text" 
                    placeholder="Student Id" 
                    className="s-id" 
                    required
                    value={roll}
                    onChange={(e)=>{setRoll(e.target.value)}}
                    />
                </div>
                <div className="input-box">
                    <input
                    type="password"
                    placeholder="Password"
                    className="password"
                    required
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
    
                <div className="btn">
                    <button type="submit" value="Submit" >
                    Login
                    </button>
                </div>
            </form>
            
            <div className="register">
                <p>
                Don't have an account? <Link to="/register"> Register!</Link>{" "}
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login