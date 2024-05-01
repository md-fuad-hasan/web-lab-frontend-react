import React, { useState } from 'react'
import Logo from '../../assets/ru_logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const token = useSelector(state=>state.token);
    const userId = useSelector(state=>state.userId);
    const roll = useSelector(state=>state.roll);
  return (
    <div>
        <div className='bg-[#1D4B8F] py-2 relative'>
            <div className='container mx-auto w-11/12 flex justify-between items-center'>
               
                <div className='flex items-center font-semibold text-lg text-white'>
                    <Link to="/" className='flex items-center'>
                    <img className='w-10 h-10' src={Logo} />
                    Department Of ICE
                    </Link>
                </div>


                <nav>
                    <button className=' text-white sm:hidden' onClick={()=>{setToggle(!toggle)}}>
                        <HiOutlineBars3 size={40} />
                    </button>
                    {
                        (token)?
                        <ul  className={`absolute bg-[#1D4B8F] text-white hover:text-white-400 font-semibold w-full left-0 top-14 p-4  ${ !toggle ? "hidden" :"block" }  sm:relative sm:top-0 sm:flex sm:p-2`}>
                            
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to="academic-curriculum">Curriculum</Link></li>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to={`form-fillup/${userId}`}>Form FillUp</Link></li>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to={`personal-info/${userId}`}> {roll}</Link></li>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to="logout"> Logout</Link></li>
                        </ul> :
                        <ul  className={`absolute bg-[#1D4B8F] text-white hover:text-white-400 font-semibold w-full left-0 top-14 p-4  ${ !toggle ? "hidden" :"block" }  sm:relative sm:top-0 sm:flex sm:p-2`}>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to="academic-curriculum">Curriculum</Link></li>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to="register"> Register</Link></li>
                            <li className='mb-2 sm:mb-0 sm:ml-5'><Link to="login"> Login</Link></li>
                        </ul>
                    }
                    

                    
                </nav>
            </div>
        
        </div>
       
    </div>
  )
}

export default Navbar
