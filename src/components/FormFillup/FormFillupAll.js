import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_form_fillup_all } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';

function FormFillupAll(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(user_form_fillup_all(props.userId, props.token))
    },[])

    const fillupAllData = useSelector(state=>state.fillupAllData)

  return (
    <div>
        <div>
          <div className="main">
          { fillupAllData ?

            <div className="prev-form">
              <h2>All Examinations</h2>
              <p>
                Below are the list of currently available examination for the Department
              </p>
              <table className="prev-form-info">
                <tbody>
                  <tr>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>Acc. Year</th>
                    <th>Form fill-up Start</th>
                    <th>Form Fillup End</th>
                    <th>Exam Date</th>
                    <th>Action</th>
                  </tr>
                {
                  fillupAllData.map((data,i)=>(
                    <tr key={i}>
                    <td>{data.year}</td>
                    <td>{data.semester}</td>
                    <td>{data.academic_year}</td>
                    <td>{data.start}</td>
                    <td>Without fine: {data.end_without_fine} <br/> <span className='text-red-400'>With fine: {data.end_with_fine}</span></td>
                    <td>{data.exam_date}</td>
                    <td>{data.complete? 
                        <span>Already Applied</span>
                        :
                        <Link to={`/form-fillup-create/${data.id}`}>
                        <button type="submit" id="bt3">
                          <i className="fa-solid fa-plus" />
                          Apply
                        </button>
                      </Link>
                    }
                      
                    </td>
                  </tr>
                  ))
                }

                 
                </tbody>
              </table>
            </div>
          :
          <div className='bg-red-200 w-80 p-3 my-24 mx-auto text-center text-lg'>
            You have no previous Form Fillup
            </div>
          }
          </div>
          
        </div>
    </div>
  )
}

export default FormFillupAll