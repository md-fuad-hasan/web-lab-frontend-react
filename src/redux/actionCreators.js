import axios from "axios";
import * as actionTypes from './actionTypes';

const user_form_fillup_store = (data) =>{
    return{
        type: actionTypes.USER_FORM_FILLUP,
        payload: {
            fillupData: data
        }
    }
}

export const user_form_fillup = (userId, token) =>dispatch =>{
    const url = `http://127.0.0.1:8000/api/form-fill-up/${userId}/`;
    const header = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    axios.get(url,header)
        .then(res=>{
            dispatch(user_form_fillup_store(res.data))
        })
        .catch(err=>{
            dispatch(user_form_fillup_store(null))

        }) 
}

const user_form_fillup_all_store = (data) =>{
    return{
        type: actionTypes.USER_FORM_FILLUP_ALL,
        payload: {
            fillupAllData: data
        }
    }
}

export const user_form_fillup_all = (userId, token) =>dispatch =>{
    const url = `http://127.0.0.1:8000/api/form-fill-up-all/${userId}/`;
    const header = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    axios.get(url,header)
        .then(res=>{
            dispatch(user_form_fillup_all_store(res.data))
        })
        .catch(err=>{
            dispatch(user_form_fillup_all_store(null))

        }) 
    
    
}

export const form_fill_up_done =(fillupId)=>{
    return{
        type: actionTypes.FORM_FILLUP_DONE,
        payload: {
            fillupDoneId : fillupId
        }
    }
}

export const user_form_fillup_complete = (fillupId, userId, token) =>dispatch =>{
    const url = `http://127.0.0.1:8000/api/form-fill-up-complete/${fillupId}/`;
    const header = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    axios.get(url,header)
        .then(res=>{
            dispatch(form_fill_up_done(fillupId));
            dispatch(user_form_fillup_all(userId,token))
            dispatch(user_form_fillup(userId,token))
            alert(res.data.message);            

        })
        .catch(err=>{
            console.log(err);
        }) 
    
    
}
