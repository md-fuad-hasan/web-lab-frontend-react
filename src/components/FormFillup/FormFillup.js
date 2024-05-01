import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { user_form_fillup } from '../../redux/actionCreators';
import { FaPlus } from "react-icons/fa";

function FormFillup(props) {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(user_form_fillup(props.userId, props.token))
       
    },[])

    const fillupData = useSelector(state=>state.fillupData);


  return (
    <div>
        <div className='mt-32 sm:mt-10'>
       

        <div className="main">

            <div className="fill-up">
              <Link to={`/form-fillup-all/${props.userId}`}>
                <button type="submit" name="form-fill-up" className='flex items-center justify-evenly'>
                  <FaPlus />
                  <span>Form Fill-Up</span>
                </button>
              </Link>
            </div>
            { fillupData ?
            <div className="prev-form">
              <div id="title">
                <h2 className='font-bold text-3xl'>All Examinations</h2>
                <p>
                  Below are the list of all examination form you have filledup previously
                </p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>Acc. Year</th>
                    <th>Student Type</th>
                    <th>Status</th>
                    <th>Last Edit</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    fillupData.map((data,i)=>(
                    
                      <tr key={i}>
                        <td>{data.year}</td>
                        <td>{data.semester}</td>
                        <td>{data.academic_year}</td>
                        <td>{data.student_type}</td>
                        <td>{data.student_status}</td>
                        <td>{data.updated}</td>
                        <td>
                          <button type="submit" id="bt1" className='mr-3'>
                            <i className="fa-solid fa-download" />
                            Form
                          </button>
                          <Link to={`/form-fillup-detail/${data.id}`}>
                            <button type="submit" id="bt2" >
                              <i className="fa-solid fa-magnifying-glass" />
                              View
                            </button>
                          </Link>
                        </td>
                      </tr>
                     
                    ))

                  }
                  
                </tbody>
              </table>
            </div>
              :
              <div className='bg-red-200 w-80 p-3 mx-auto text-center text-lg'>
                 You have no previous Form Fillup
                </div>
        }
          </div>
          
          

        </div>

    </div>
  )
}

export default FormFillup