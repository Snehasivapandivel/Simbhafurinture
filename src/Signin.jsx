import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [SigninData, setData] = useState({
    name: null,

    password: null,

  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...SigninData, [name]: value })
    console.log(name, value);
    console.log(SigninData);
  }

  const addData = () => {
    const sgnData = {
      name: SigninData.name,

      password: SigninData.password,


    }
    console.log(sgnData);
  
      
      
        
      
    let nwarning = document.getElementById("nameWarning");
    let pwarning = document.getElementById("passwarning");

    if (SigninData.name == '' || SigninData.name == null ) {
      nwarning.innerHTML = "Enter your Name";
      nwarning.style.color = "red";
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";
    } else if (SigninData.password == '' || SigninData.password == null) {
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";
    } else if (SigninData.name == '' || SigninData.name == null && SigninData.password == '' || SigninData.password == null) {
      nwarning.innerHTML = "Enter your Name";
      nwarning.style.color = "red";
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";

    } 
    else if(SigninData.name == 'sneha' && SigninData.password == '1234' ){
        navigate("/Home");
    }

  }
  return (
    <div>
     

      <form className="mt-3">
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label" >Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="name" value={SigninData.name}
            onChange={handleChange} />


        </div>
        <p id="nameWarning"></p>

        <div class="mb-2">
          <label for="exampleInputEmail1" className="form-label" >Password</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="password" value={SigninData.password}
            onChange={handleChange} />


        </div>
        <p id="passWarning"></p>


        <div className="d-grid gap-2">
          <button className="btn btnn btn-danger rounded" type="button" onClick={addData}>Button</button>
        </div>
      </form>
    </div>





  );
}



export default Signin;