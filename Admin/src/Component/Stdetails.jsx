import React, { useEffect, useState } from 'react'
import './Stdetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const Stdetails = () => {

  const studentdata = {
    fname: "", 
    lname: "",
    fathername: "", 
    phone: "",
    dateofbirth: "",
    gender: "",
    class: "",
    Monthlyfee: "", 
    Address: "", 
  };
   const [studentuser, setstudentuser] = useState(studentdata)
 const {id} = useParams(); 

useEffect(() => {
        axios.get(`https://admission-form-1pxz.onrender.com/api/getOne/${id}`)
        .then((response)=>{
          setstudentuser(response.data)
          console.log(response)
        }).catch((error)=>{
          console.log(error)
        })
}, [id])

 
  return (
   <div className='form'>
    <h3 className='h3'>Student Admission Form</h3>
    <Link to = "/">Back</Link>
    <form action="" >
      <table>
        <tr>
          <th>Student Name: </th>
          <td>{studentuser.fname} {studentuser.lname}</td>
        </tr>
        <tr>
          <th>Class </th>
          <td>{studentuser.class}</td>
        </tr>
        <tr >
          <th>Father Name: </th>
          <td>{studentuser.fathername}</td>
        </tr>
        <tr >
          <th>Phone Number </th>
          <td>{studentuser.phone}</td>
        </tr>
        <tr >
          <th>Date of Birth </th>
          <td>{studentuser.dateofbirth}</td>
        </tr>
        <tr >
          <th>Gender </th>
          <td>{studentuser.gender}</td>
        </tr>
        <tr >
          <th>Address </th>
          <td>{studentuser.Address}</td>
        </tr>
      </table>
    </form>
  </div>
  )
}

export default Stdetails