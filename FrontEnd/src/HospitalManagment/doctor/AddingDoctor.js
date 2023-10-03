// import { json } from 'express';
import Test from '../login/Test.css'
import { useState } from "react";
import axios from 'axios'
export default function AddingDoctor() {

 
  const [Email, setEmail] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [age, setage] = useState("");
  const [qualification, setqualification] = useState("");
  const [name, setname] = useState("");
  const [fname, setfname] = useState("");
  const [specailzation, setspecialization] = useState("");
  

  const handleSubmit=(e)=>{

    e.preventDefault()
    console.log(e)
  
    
  }

  const postData=async(e)=>{
    
    try {
     

      if(name && password && Email  && fname 
       && (name.length>5)){  
        
        alert("congratualtion your account is succesfully created")
   
      await axios.post('http://localhost:5000/AddDoctor',{
        name,fname,age,gender,Email,password,qualification,specailzation
      }).then((req,res)=>console.log("connecting"))
   
     

    }
    else{
      alert("please fill all the fields")
      
    }
    } catch (error) {
      console.log(error)
      
    }
  
    
   
  }
  

  return (
    <div className="container ">
      <div className="imageContainer">
        {/* <img src="./doctorPatient.png" alt="doctor" /> */}
      </div>
      <div className="  login">
        <form onSubmit={handleSubmit} method='post' className=" loginForm">
        
        
         
        <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Doctor name"
           
            onChange={(e)=>{setname(e.target.value)}}
          />

           <label>FName:</label>
          <input
            type="text"
            name="fName"
            placeholder="Enter Docort father  Name"
            
            onChange={(e)=>{setfname(e.target.value)}}
          />
           <label>qualification:</label>
          <input
            type="text"
            name="disease"
            placeholder="Enter your qualification"
       
            onChange={(e)=>{setqualification(e.target.value)}}
          />
          <label>specialization:</label>
          <input
            type="text"
            name="disease"
            placeholder="Enter your specailzation"
       
            onChange={(e)=>{setspecialization(e.target.value)}}
          />

<label >Select your gender:</label>
        
        <select className='drop-down bg-gray-100' value={gender} onChange={e=>setgender(e.target.value)}>
          <option value="">your gender</option>
          <option >Male</option>
          <option >Female</option>
          <option >other</option>
            </select>

<label>age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
         
            onChange={(e)=>{setage(e.target.value)}}
          />

         <label>Email</label>
         <input
            type="email"
            name="email"
            placeholder="Email"
          
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
         
            onChange={(e)=>{setPassword(e.target.value)}}
          />

{/* <label>Renter Password:</label>
          <input
            type="password"
            name="Repassword"
            placeholder="Enter your password again"
      
            onChange={(e)=>{setRePassword(e.target.value)}}
          />  */}

          
          <button onClick={postData}>Add Doctor</button>
        </form>
      </div>
    </div>
  );
}
