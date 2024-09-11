import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';



function Signup() {
  const navigate = useNavigate();
 const [SignupData, setData]=useState({
    name:null,
    email:null,
    password:null,
    cpassword:null,
  })
  
   const handleChange =(event)=>{
      const { name, value } = event.target;
      setData({...SignupData,[name]:value})
      console.log(name, value);
      console.log(SignupData);
    }

   const addData=()=>{
      const sgnData={
        name:SignupData.name,
        email:SignupData.email,
        password:SignupData.password,
        confirmPassword:SignupData.cpassword,
        
      }
      console.log(sgnData);
     
  navigate("/home")
    }
    return (
        <div>
         
           
            <form className="mt-3">
            <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  name="name" value={SignupData.name}
    onChange={handleChange} />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  name="email" value={SignupData.email} 
     onChange={handleChange}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Password</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  name="password" value={SignupData.password} 
     onChange={handleChange}/>
    
  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-danger rounded btnn" type="button" onClick={addData}>Button</button>
</div>
</form> 
  </div>


 
       
      
    );
}



export default Signup;