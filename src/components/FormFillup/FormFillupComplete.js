import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { form_fill_up_done, user_form_fillup_complete } from '../../redux/actionCreators'

function FormFillupComplete() {

    const dispatch = useDispatch()
    const params = useParams()
    const userId = useSelector(state=>state.userId);
    const token = useSelector(state=>state.token);
    const fillupDoneId = useSelector(state=>state.fillupDoneId);
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(user_form_fillup_complete(params.fillupId,userId,token))

    },[])

    if(fillupDoneId){
        navigate(`/form-fillup-detail/${fillupDoneId}`);
        dispatch(form_fill_up_done(null))
    }


  return (
    <div></div>
  )
}

export default FormFillupComplete