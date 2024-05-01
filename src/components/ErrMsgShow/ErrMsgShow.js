import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { login_error, signup_error } from '../../redux/authActionCreators';
function ErrMsgShow(props) {
    const dispatch = useDispatch()
    const handleMsg = () =>{
        dispatch(login_error(null));
        dispatch(signup_error(null));
    }
  return (
    <div>
        <div className={` bg-red-400 p-3 flex justify-between w-80 mx-auto rounded text-white`}>
            <div>
                 {props.errMsg}
            </div>
            <button onClick={handleMsg} >
                <RxCross2 className='font-semibold text-lg'/>
            </button>


        </div>
    </div>
  )
}

export default ErrMsgShow