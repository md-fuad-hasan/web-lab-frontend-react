import React, { useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProfileDetail from '../ProfileDetail/ProfileDetail';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../Logout/Logout';
import { auth_check } from '../../redux/authActionCreators';
import FormFillup from '../FormFillup/FormFillup';
import FormFillupDetail from '../FormFillup/FormFillupDetail';
import FormFillupAll from '../FormFillup/FormFillupAll';
import FormFillupComplete from '../FormFillup/FormFillupComplete';
import Academic from '../AcademicCurriculam/Academic';
import Footer from '../Footer/Footer';

function MainComponent() {
  const token = useSelector(state=>state.token);
  const userId = useSelector(state=>state.userId);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(auth_check());
  },[])


  const route = token ?<Routes>
          <Route path='/' element={<Navigate to={`personal-info/${userId}`} />}/>
          <Route path='personal-info/:userId' element={<ProfileDetail token={token} userId={userId} />} />
          <Route path='form-fillup/:userId' element={<FormFillup token={token} userId={userId}/>} />
          <Route path='form-fillup-detail/:fillupId'  element={<FormFillupDetail />}/>
          <Route path='form-fillup-all/:userId'  element={<FormFillupAll token={token} userId={userId} />}/>
          <Route path='form-fillup-create/:fillupId'  element={<FormFillupDetail complete="No" />}/>
          <Route path='form-fillup-complete/:fillupId'  element={<FormFillupComplete />}/>
          <Route path='academic-curriculum/'  element={<Academic />}/>
          <Route path='logout' element={<Logout />} />
          <Route path='*' element={<Navigate to="/" />} />
      </Routes> : <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='academic-curriculum/'  element={<Academic />}/>
          <Route path='*' element={<Navigate to="login" />} />
        </Routes>
  return (
    <div>
      <Navbar />
      {route}
      <Footer />
    </div>
  )
}

export default MainComponent