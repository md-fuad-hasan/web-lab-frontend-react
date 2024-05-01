import React from 'react'
import { useDispatch } from 'react-redux';
import { logout_user } from '../../redux/authActionCreators';

function Logout() {
    const dispatch = useDispatch();

    dispatch(logout_user());
    
  return (
    <div>Logout</div>
  )
}

export default Logout