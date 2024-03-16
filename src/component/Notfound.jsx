import React from 'react';
import notFoundImage from "../Images/oops404.png";


const Notfound = () => {
  return (
    <div style={{width:"30rem"}}>
      <img src={notFoundImage} alt="Not Found" style={{width:"40rem", marginLeft:"23rem", marginTop:"5ren"}} />
      <div>
      <h2>No data found in this month</h2>
      </div>
      </div>
   
  );
}

export default Notfound;