import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../Api/AxiosApi";
import swal from 'sweetalert';
import "../Styles/login.css"

const Signup = () => {

 const navigate = useNavigate();

 //-----------------signup function-----------------------

  const handleSignup = async (e)=>{
    e.preventDefault();
    const userData = {
      userName:e.target.userName.value,
      email: e.target.email.value,
      password : e.target.password.value
    } 
    try {
      // Send data to the backend
      const response = await axios.post("/user/register",userData)
      if(response.status===201){
        await  swal("Success!", response.data.message, "success");
         navigate("/user/login")
      }
      
    } catch (error) {
      swal("Error!", error.response.data.message, "error");
    }
}

//---------------------------------------------------------------
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
         
            <div className="text">
             
            </div>
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
            <form onSubmit={handleSignup}>
              <header>Create Account</header>
              <div className="input-field">
              <input type="text" className="input"  required autoComplete="off" name='userName'/>
              <label htmlFor="email">User Name</label>
            </div>
              <div className="input-field">
                <input type="text" className="input"  required autoComplete="off" name='email'/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input"  required name='password' autoComplete='off' />
                <label htmlFor="pass">Password</label>
              </div>
              <div className="input-field">
              <button type="submit" className="submit">Signup</button>
              </div>
              </form>
              <div className="signin">
                <span>
                  Already have an account? <Link to="/user/login">Login here</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup