import React, { useState } from 'react'
import CustomCard from '../component/Card';
import { useNavigate, useParams } from 'react-router-dom';



const Viewmonth = () => {

    const navigate = useNavigate();
    const {id}= useParams(); //category id
    
    const monthNames = ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"];
     const monthValues = [1,2,3,4,5,6,7,8,9,10,11,12]
           const[selectedMonth,setSelectedMonth] = useState(null);  
           
          //  const handleCardClick = (month) => {
          //   setSelectedMonth(month);
          //   navigate(`/view/tasks/${month}/${id}`);
            
          // };        

         

const handleCardClick = (month) => {
  const monthIndex = monthNames.indexOf(month);
  
  if (monthIndex !== -1) {
    const numericValue = monthValues[monthIndex];
    setSelectedMonth(numericValue);
    navigate(`/view/tasks/${numericValue}/${id}`);
  } else {
    // Handle the case when the selected month is not found
    console.error("Selected month not found");
  }
};
   
  return (
    <div>
{monthNames?.map((month,index)=>(

    <CustomCard 
    key={index}
    title={month}
    cardtext={`Click to select ${month}`}
    onClick={() => handleCardClick(month)}
    />
    
))}
   
    
    </div>
  )
}

export default Viewmonth