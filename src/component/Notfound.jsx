import React from 'react';
import notFoundImage from "../Images/oops404.png";
import "../Styles/notfound.css"

const Notfound = () => {
  return (

    <div className="imgcontainer">
    <div className="image-container">
        <img src={notFoundImage} alt="Not Found"/>
    </div>
    <div className="imgtext-container">
        <h2>No data found in this month</h2>
    </div>
</div>


   
  );
}

export default Notfound;