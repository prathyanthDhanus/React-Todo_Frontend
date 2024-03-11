
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from "../Api/AxiosApi";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import '../Styles/login.css'; 

const LoginComponent = () => {

//--------hooks--------

  const navigate = useNavigate();


  //-------------login function---------------

    const handleLogin = async (e)=>{
        e.preventDefault();
        const userData = {
          email: e.target.email.value,
          password : e.target.password.value
        }
        try {
          // Send data to the backend
          const response = await axios.post("/user/login",userData)
         
          if(response.status===200){
            
            // Cookies.set('userId', response.data.data, { expires: 7, path: '/', secure: true })
            localStorage.setItem('userId', response.data.data);
            await  swal("Success!", response.data.message, "success");
             navigate("/")
          }
          
        } catch (error) {
          swal("Error!", error.response.data.message, "error");
        }
    }
    //----------------------------------------------------------

  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-log-image">
          </div>
          <div className="col-md-6 right">
          
          <div className="input-box" >
          <form onSubmit={handleLogin}>
              <header>User Login</header>
              <div className="input-field">
                <input type="text" className="input" required autoComplete="off" name='email' />
                <label >Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input"  required name='password' autoComplete="off" />
                <label>Password</label>
              </div>
              <div className="input-field">
              <button type="submit" className="submit">Login</button>
              </div>
              </form>
              <div className="signin">
                <span>
                  Create  an account? <Link to="/user/signup">Signup here</Link>
                </span>
                <span><br/><br/>
                Forgot Password <Link to="/user/signup">Reset Password </Link>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
