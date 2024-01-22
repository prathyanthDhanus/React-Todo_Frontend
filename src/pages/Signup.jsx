import React from 'react'
import "./login.css"

const Signup = () => {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/* Image */}
            <img src="" alt="" />
         
            <div className="text">
             
            </div>
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
              <header>Create Account</header>
              <div className="input-field">
                <input type="text" className="input" id="email" required="" autoComplete="off" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" id="pass" required="" />
                <label htmlFor="pass">Password</label>
              </div>
              <div className="input-field">
                <input type="submit" className="submit" value="Sign Up" />
              </div>
              <div className="signin">
                <span>
                  Already have an account? <a href="#">Log in here</a>
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