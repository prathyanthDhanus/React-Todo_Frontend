

import React, { useEffect, useState } from 'react';
import axios from "../Api/AxiosApi";
// import useFetchTasks from '../CustomHooks/CustomViewTask';
import "../Styles/toggle.css";

const Toggle = ({ taskId, initialStatus , onToggle }) => {
  
  const [isChecked, setIsChecked] = useState(initialStatus === 'complete');
  const handleChange = async () => {
    try {
      setIsChecked(prevChecked => !prevChecked);

      const response = await axios.put(`/edit/todo/tasks/${taskId}`, {
        status: isChecked ? 'incomplete' : 'complete'
      });
    
    
     
    

    } catch (error) {
      console.error('Error toggling task status:', error);
      
    }
  };






  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </>
  )
}

export default Toggle;


// import React, { useState } from 'react';
// import axios from "../Api/AxiosApi";
// import "../Styles/toggle.css";

// const Toggle = ({ taskId, initialStatus, onToggle }) => {
    
//     const [isChecked, setIsChecked] = useState(initialStatus === 'complete');

//     const handleChange = async (newChecked) => {
//       try {
//         setIsChecked(newChecked);

//         const response = await axios.put(`/edit/todo/tasks/${taskId}`, {
//           status: newChecked ? 'complete' : 'incomplete'
//         });

//         if (response.status === 200) {
//           onToggle();
//         }
//       } catch (error) {
//         console.error('Error toggling task status:', error);
//       }
//     };

//     return (
//       <label className="switch">
//         <input 
//           type="checkbox" 
//           checked={isChecked} 
//           onChange={(e) => handleChange(e.target.checked)}  // Pass the new value of checkbox
//         />
//         <span className="slider"></span>
//       </label>
//     );
//   }

//   export default Toggle;
