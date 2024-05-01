import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Academic() {
    const [session,setSession] = useState('2018-19');
    const [year,setYear] = useState('4');
    const [semester,setSemester] = useState('1');
    const [sem, setSem] = useState('4-1');
    const [dataArr, seDataArr] = useState([]);


   
    const handleSubmit=()=>{
        let sem = year + '-' +semester;
        console.log(session,sem);
        const url = `http://127.0.0.1:8000/api/course-detail/?session=${session}&semester=${sem}`;
        const header = {
            headers : {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.get(url,header)
        .then(res=>{
            seDataArr(res.data);
            console.log(res);
        })
        .catch(err=>{
            seDataArr([]);
            console.log(err);
        })
    }

    let totalCredit = 0;
    let totalMark = 0;

    dataArr.map(data=>{
        totalCredit +=data.course_credit;
        totalMark+=data.course_credit*25;
    })



  return (
    <div>
        <div>
            <div className="main">
                <div className="ac-container">

                    <h2>Accademic Curriculumn</h2>
                    <div className="select-st">
                    <div className="select-session">
                        <label htmlFor="session">
                        Session:
                        <select id="session" value={session} onChange={e=>setSession(e.target.value)}>
                            <option value="2018-19">2018-19</option>
                            <option value="2019-20">2019-20</option>
                            <option value="2020-21">2020-21</option>
                            <option value="2021-22">2021-22</option>
                            <option value="2022-23">2022-23</option>
                        </select>
                        </label>
                    </div>
                    <div className="select-part">
                        <label htmlFor="part">
                        Part:
                        <select id="part" value={year} onChange={e=>{setYear(e.target.value)}}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        </label>
                    </div>
                    <div className="select-semester">
                        <label htmlFor="semester">
                        Semester:
                        <select id="semester" value={semester} onChange={e=>{setSemester(e.target.value)}}>
                            <option value="1">ODD</option>
                            <option value="2">EVEN</option>
                        </select>
                        </label>
                    </div>
                    <div>
                        <button className='p-1 bg-white rounded hover:bg-green-200' onClick={handleSubmit}>Submit</button>
                    </div>
                    </div>

                    <div className="courses">
                    <table>
                        <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Marks</th>
                            <th>Credit</th>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                dataArr.map((data,i)=>(
                                    <tr key={i}>
                                        <th scope="row">{data.course_code}</th>
                                        <td>{data.course_title}</td>
                                        <td>{data.course_credit*25}</td>
                                        <td>{data.course_credit}</td>
                                        
                                    </tr>
                                ))
                            }
                      
                        </tbody>
                        <tfoot>
                        <tr>
                            <th scope="row" colSpan={2}>
                            Total=
                            </th>
                            <td>{totalMark}</td>
                            <td>{totalCredit}</td>
                        </tr>
                        </tfoot>
                    </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Academic