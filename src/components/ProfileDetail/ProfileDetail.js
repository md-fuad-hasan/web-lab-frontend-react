import React, { useEffect } from 'react';
import './ProfileDetail.css';
import { useActionData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth_check, profile_detail } from '../../redux/authActionCreators';



function ProfileDetail(props) {

  const dispatch = useDispatch();
  const full_name = useSelector(state=>state.full_name)
  const reg = useSelector(state=>state.reg)
  const profile_pic = useSelector(state=>state.profile_pic)
  const mobile_no = useSelector(state=>state.mobile_no)
  const session = useSelector(state=>state.session)

  const roll = localStorage.getItem('roll'); 


  useEffect(()=>{
      dispatch(profile_detail( props.userId,props.token));
      dispatch(auth_check());
  },[])


  return (
    <div>
      <div className="main">
        <div className="info-container">
          <h3 className="text-info">
            <i className="fa fa-user-circle" />
            Student Primary Information
          </h3>
          <div className="image-info">
            <div className="image">
              <img src={profile_pic} alt={full_name} height="100px/" />
              <h4>{full_name}</h4>
            </div>
            <div className="info">
              <table className="table-user-information">
                <tbody>
                  <tr>
                    <th>Department</th>
                    <td>Information &amp; Communication Engineering</td>
                  </tr>
                  <tr>
                    <th>Program</th>
                    <td>UNDERGRADUATE</td>
                  </tr>
                  <tr>
                    <th>Reg No</th>
                    <td>{reg}</td>
                  </tr>
                  <tr>
                    <th>Class Roll</th>
                    <td>{roll}</td>
                  </tr>
                  <tr>
                    <th>Session</th>
                    <td>{session}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{mobile_no}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProfileDetail