import React from 'react'
import useFetchTasks from '../CustomHooks/CustomViewTask';
import { useContext } from 'react';
import { myContext } from '../context/contextAPI';
import { useParams } from 'react-router-dom';


const Profilestatus = () => {

  const { userId } = useContext(myContext);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const { tasks, error } = useFetchTasks(userId, currentMonth, currentYear);

  console.log("ttttt",tasks);
  return (
    <div>
    
    
    </div>
  )
}

export default Profilestatus