import React, { useEffect, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login_error, signup_user } from '../../redux/authActionCreators';
import ErrMsgShow from '../ErrMsgShow/ErrMsgShow';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roll, setRoll] = useState("");
    const [reg, setReg] = useState("");
    const [profile_pic, setProfilePic] = useState(null);
    const [session, setSession] = useState("2018-19");
    const [full_name, setFullName] = useState("");
    const [fathers_name, setFathersName] = useState("");
    const [mothers_name, setMothersName] = useState("");
    const [mobile_no, setMobileNo] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupSuccess = useSelector(state=>state.signupSuccess);
    const signupErr = useSelector(state=>state.signupErr);
     

    // useEffect(()=>{
    //     login_error(null);
    // },[])
    
    if(signupSuccess){
        navigate("/login");
    }
    const handleImage = (e) =>{
       setProfilePic(e.target.files[0]);
    }

    const handleSubmit = (e)=>{
        let data = new FormData();

        let user = {
            email : email,
            password: password,
            roll: roll
        }
        // let data = {
        //     user: user,
        //     reg:reg,
        //     profile_pic:profile_pic,
        //     session:session,
        //     full_name:full_name,
        //     fathers_name: fathers_name,
        //     mothers_name: mothers_name,
        //     mobile_no: mobile_no
        // } 
        let userJson = JSON.stringify(user);
        data.append('user', userJson);

        data.append('reg',reg);
        data.append('profile_pic',profile_pic);
        data.append('session',session);
        data.append('full_name',full_name);
        data.append('fathers_name',fathers_name);
        data.append('mothers_name',mothers_name);
        data.append('mobile_no',mobile_no);
        
        
        dispatch(signup_user(data));

        console.log(data);

        e.preventDefault();
    }


    return (

        <div>

            <div className='withMsg'>

                <div className='m-2'>
                    {signupErr ? <ErrMsgShow errMsg = {signupErr} /> : null}
                </div>
                <div className="registration-form">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                    <h3>Registration Form</h3>
                    <div className="in-st-name">
                        <p>Student Name: </p>
                        <input
                        type="text"
                        placeholder="e.g- Md.Nahimul Islam"
                        className="st-name"
                        required=""
                        value={full_name}
                        onChange={(e)=>{setFullName(e.target.value)}}
                        />
                    </div>
                    
                    <div className="in-f-name">
                        <p>Father's Name:</p>
                        <input
                        type="text"
                        placeholder="e.g- Md XYZ"
                        className="f-name"
                        required=""
                        value={fathers_name}
                        onChange={(e)=>{setFathersName(e.target.value)}}
                        />
                    </div>
                    <div className="in-m-name">
                        <p>Mother's Name:</p>
                        <input
                        type="text"
                        className="m-name"
                        placeholder="e.g- Mst ABC"
                        required=""
                        value={mothers_name}
                        onChange={(e)=>{setMothersName(e.target.value)}}
                        />
                    </div>
                    
                    <div className="in-session">
                        <label>Session: </label>
                        <select 
                            className="session"
                            value={session}
                            onChange={(e)=>{setSession(e.target.value)}}
                        >
                            <option value="2018-19" >2018-19</option>
                            <option value="2019-20">2019-20</option>
                            <option value="2020-21">2020-21</option>
                            <option value="2021-22">2021-22</option>
                            <option value="2022-23">2022-23</option>
                        </select>
                    </div>
                    <div className="in-roll">
                        <p>Roll Number:</p>
                        <input
                        type="text"
                        placeholder="e.g- 1911077121"
                        className="roll"
                        required
                        value={roll}
                        onChange={(e)=>{setRoll(e.target.value)}}
                        />
                    </div>
                    <div className="in-reg">
                        <p>Registration Number:</p>
                        <input
                        type="text"
                        placeholder="e.g- 1911077121"
                        className="reg"
                        required=""
                        value={reg}
                        onChange={(e)=>{setReg(e.target.value)}}
                        />
                    </div>
                    <div className="in-mobile">
                        <p>Mobile: </p>
                        <input
                        type="text"
                        placeholder="0177*****02"
                        className="mobile"
                        required=""
                        value={mobile_no}
                        onChange={(e)=>{setMobileNo(e.target.value)}}
                        />
                    </div>
                    <div>
                        <p>Profile Pic:</p>
                        
                        <input 
                        type="file"
                        name="profile_pic" 
                        onChange={handleImage}
                    />

                    </div>
                    
                    <div className="in-email">
                        <p>E-mail: </p>
                        <input
                        type="text"
                        placeholder="asdf12@gmail.com"
                        className="mobile"
                        required
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="in-password">
                        <p>Password</p>
                        <input
                        type="password"
                        placeholder="Password"
                        className="password"
                        required
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="in-cn-password">
                        <p>Confirm Password:</p>
                        <input
                        type="password"
                        placeholder="Confirm password"
                        className="cn-password"
                        required
                        />
                    </div>
                    <button type="submit" id="bt1" >
                        SUBMIT
                    </button>

                    <div className="login">
                        <p>
                        Do have an account? <Link to="/login" >Login! </Link> {" "}
                        </p>
                    </div>
                    </form>
                </div>
          </div>

        </div>
      
    )
}

export default Register