import React from 'react'
import "./Main.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Main = () => {
const [student, setstudent] = useState([])
useEffect(() => {
     const fetchdata = async () =>{
        const responst = await axios.get("https://admission-form-1pxz.onrender.com/api/getAll")
        setstudent(responst.data)
     }
     fetchdata(); 
}, [])
  return (
   
    <div className="container">
    <table className="table">
        <tr className='tr'>
            <th className="table-header">Sr.no</th>
            <th className="table-header">Student Name</th>
            <th className="table-header">Class</th>
            <th className="table-header">Address</th>
            <th className="table-header">Details</th>
        </tr>
        {
            student.map((studenti, index) =>{
                return (
                    <tr className='tr' key={studenti._id}>
                    <td className="table-cell">{index + 1}</td>
                    <td className="table-cell">{studenti.fname} {studenti.lname}</td>
                    <td className="table-cell">{studenti.class}</td>
                    <td className="table-cell">{studenti.Address}</td>
                    <td className="table-cell"><Link to={`/Stdetail/${studenti._id}`}><button>Details</button> </Link></td>
                </tr>
                )
            })
        }
       
       
    </table>
</div>
  )
}

export default Main