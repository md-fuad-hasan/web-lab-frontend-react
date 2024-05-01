import {jwtDecode} from 'jwt-decode';
import * as actionTypes from './actionTypes';
import axios from 'axios';


const profile_detail_store=(full_name,reg,profile_pic,session,mobile_no)=>{
    return{
        type:actionTypes.PROFILE_DETAIL,
        payload:{
            full_name:full_name,
            reg : reg,
            profile_pic : profile_pic,
            session : session,
            mobile_no : mobile_no
        }
    }
}

export const profile_detail=(userId,token)=>dispatch=>{
    const url = `http://127.0.0.1:8000/api/personal-info/${userId}/`;
    const header = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    axios.get(url,header)
        .then(res=>{
            console.log(res);
            const full_name = res.data.full_name
            const reg = res.data.reg
            const profile_pic = 'http://127.0.0.1:8000/'+res.data.profile_pic
            const session = res.data.session
            const mobile_no = res.data.mobile_no
            dispatch(profile_detail_store(full_name,reg,profile_pic,session,mobile_no));
        })
        .catch(err=>{
            console.log(err);
            dispatch(profile_detail_store(null,null,null,null,null));

        }) 
    
}





const store_locally = (token,roll)=>{
    const token_decode = jwtDecode(token);
    const userId = token_decode.user_id;
    const expirationTime = new Date(token_decode.exp * 1000);

    localStorage.setItem('roll',roll);
    localStorage.setItem('token',token);
    localStorage.setItem('userId',userId);
    localStorage.setItem('expirationTime',expirationTime);

    return userId;

}


const signup_success=()=>{
    return{
        type: actionTypes.SIGNUP_SUCCESS
    }
}

export const signup_finished=()=>{
    return{
        type: actionTypes.SIGNUP_FINISHED
    }
}

export const signup_error = msg =>{
    return{
        type: actionTypes.SIGNUP_ERROR,
        payload: msg
    }
}

export const signup_user = (obj) =>dispatch=>{
    const url = 'http://127.0.0.1:8000/api/register/';
    
    const header = {
        headers : {
            "Content-Type": "multipart/form-data"
            // "Content-Type" : "application/json"

        }
    }

    axios.post(url,obj,header)
        .then(res=>{
            dispatch(signup_success());
            window.alert("SignUp Succcessfully Done !");
            
        })
        .catch(err=>{
                console.log(err);
                dispatch(signup_error("Something went wrong !"));
        })
}



const login_success=(token, userId,roll)=>{

    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            token: token,
            userId: userId,
            roll: roll,
        }
    }
}

export const login_error=(data)=>{
    return{
        type: actionTypes.LOGIN_ERROR,
        payload: {
            loginErr : data,
        }
    }
}

export const login_user = (roll,password) =>dispatch=> {

    const url = 'http://127.0.0.1:8000/api/login/';
    const data = {
        roll:roll,
        password:password
    }
    const header = {
        headers : {
            "Content-Type" : "application/json"
        }
    }

    axios.post(url,data,header)
        .then(res=>{
            const roll = res.data.roll;
            const token = res.data.access;
            const userId = store_locally(token,roll);
            dispatch(login_success(token,userId,roll));
          
            
        })
        .catch(err=>{

            
            if(err.message === "Request failed with status code 400"){
                dispatch(login_error(err.response.data.non_field_errors[0]));
            }else{
                dispatch(login_error("Something went wrong!"));

            }
            
        })

       
}

export const logout_user = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('roll');

    return{
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export const auth_check =()=>dispatch=>{
    const token = localStorage.getItem('token');
    if(!token){
        dispatch(logout_user());
    }else{
        const roll = localStorage.getItem('roll');
        const userId = localStorage.getItem('userId');
        const expirationTime = new Date(localStorage.getItem('expirationTime'));

        if(expirationTime<=new Date()){
            dispatch(logout_user());
        }
        else{
            dispatch(login_success(token,userId,roll));
            dispatch(profile_detail(userId,token));

        }
    }
}

