import { useState } from "react";
import React from 'react';
import "./Form.css";
import axios from 'axios'
import toast from "react-hot-toast";

const Form = () => {
  const student = {
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
  
  
  const [user, setUser] = useState(student);
  const [studentClass, setStudentClass] = useState("");
  const [gender, setGender] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]:value})
    
    console.log({ ...user, [name]: value });
  };

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    inputHandler({ target: { name: 'gender', value: selectedGender } });
  };

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setStudentClass(selectedClass);


    let monthlyFee = "";
    if (selectedClass === "One") {
      monthlyFee = "1000/-";
    } else if (selectedClass === "Two") {
      monthlyFee = "2000/-";
    } else if (selectedClass === "Three") {
      monthlyFee = "3000/-";
    } else if (selectedClass === "Four") {
      monthlyFee = "4000/-";
    } else if (selectedClass === "Five") {
      monthlyFee = "5000/-";
    }

    setUser({...user, class: selectedClass, Monthlyfee: monthlyFee})
  };

 
  const submitform =async (e) =>{
    e.preventDefault(); 
    await axios.post("https://admission-form-1pxz.onrender.com/api/create", user )
    .then((response) =>{
        console.log("Form Submited Sussfully")
        toast.success(response.data.msg || "Form Submited Successfully", {position:"top-right"})
      
    }).catch((error =>console.log(error)))

     setUser(student); 
     setGender("")
     setStudentClass("")
  }


  return (
    <div className='form'>
      <h3 className='h3'>Student Admission Form</h3>
      <form action="" onSubmit={submitform}>
        <div className="alldivs">
          <div className="name">
            <div className="input-group">
              <label htmlFor="fname">First Name:</label>
              <input type="text" onChange={inputHandler} value={user.fname} name="fname" />
            </div>
            <div className="input-group">
              <label htmlFor="lname">Last Name:</label>
              <input type="text" name="lname" value={user.lname} onChange={inputHandler} />
            </div>
          </div>

          <div className="name">
            <div className="input-group">
              <label htmlFor="fathername">Father Name:</label>
              <input type="text" onChange={inputHandler}   value={user.fathername} name='fathername' />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone:</label>
              <input type="number" onChange={inputHandler} value={user.phone}  name='phone' />
            </div>
          </div>

          <div className="name">
            <div className="input-group dob">
              <label htmlFor="DOB">DOB</label>
              <input type="date" onChange={inputHandler} value={user.dateofbirth} name='dateofbirth' />
            </div>
            <div className="input-group">
              <label htmlFor="Gender">Gender</label>
              <div className="malefemale">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>

          <div className="name">
            <div className="input-group">
              <label htmlFor="studentClass">Select Class:</label>
              <select id="studentClass" name="class" value={studentClass} onChange={handleClassChange}>
                <option value="" disabled>Select Class</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
                <option value="Five">Five</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="fee">Monthly Fee:</label>
              <span>{user.Monthlyfee}</span>
            </div>
          </div>

          <div className="input-group address">
            <label htmlFor="Address">Address:</label>
            <input type="text" name="Address" onChange={inputHandler} value={user.Address} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
