import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useActionData, useParams } from 'react-router-dom';

function FormFillupDetail(props) {
    const params = useParams();
    const fillupData = useSelector(state=>state.fillupData)
    const fillupAllData = useSelector(state=>state.fillupAllData)
    const full_name = useSelector(state=>state.full_name)
    const mobile_no = useSelector(state=>state.mobile_no)
    let detailData = null;
    if(props.complete=="No"){
        if(fillupAllData){
            fillupAllData.map((data)=>{
                if(data.id==params.fillupId){
                    detailData = data;
                }
            })
        }
    }
    else{
        if(fillupData){
            fillupData.map((data)=>{
                if(data.id==params.fillupId){
                    detailData = data;
                }
            })
        }
    }
    
  return (
    <div>
        <div>
              

            <div className="main">
            { detailData ?
                <div className="form-container">
                    
                    {detailData.complete ? <button>Download Form</button> : <div></div> }

                    <div className="exam-details">
                    <h2>Exam Details: </h2>
                    <table className="exam-info">
                        <tbody>
                        <tr>
                            <th>Department</th>
                            <td>Information &amp;Communication Engineering</td>
                        </tr>
                        <tr>
                            <th>Exam Name</th>
                            <td>B.Sc. Engineering</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{detailData.year}</td>
                        </tr>
                        <tr>
                            <th>Semester</th>
                            <td>{detailData.semester} Semester</td>
                        </tr>
                        <tr>
                            <th>Accademic Year</th>
                            <td>{detailData.academic_year}</td>
                        </tr>
                        <tr>
                            <th>Student Type</th>
                            <td>{detailData.student_type}</td>
                        </tr>
                        <tr>
                            <th>Previous Exam</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>Previous Exam Year</th>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{mobile_no}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="personal-details">
                    <h2>Personal Details:</h2>
                    <table className="persnal-info">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{full_name}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{mobile_no}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="courses">
                    <h2>Courses:</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Credit</th>
                        </tr>
                        </thead>
                        <tbody>
                         {
                            detailData.course.map((course,i)=>(
                                <tr key={i}>
                                    <th scope="row">{course.course_code}</th>
                                    <td>{course.course_title}</td>
                                    <td>{course.course_credit}</td>
                                </tr>
                            ))
                         }   
                        
                        </tbody>
                    </table>
                    </div>

                    {detailData.complete ? <div></div>:
                    <Link to={`/form-fillup-complete/${detailData.id}`}>
                        <button >Submit</button>
                    </Link> }
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

export default FormFillupDetail