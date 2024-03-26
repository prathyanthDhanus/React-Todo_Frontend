import React from "react";
import { useContext } from "react";
import { myContext } from "../context/contextAPI";
import useFetchTasks from "../CustomHooks/CustomViewTask";
import Notfound from "../component/Notfound";
import Card2 from "../component/Card2";
import Toggle from "../component/Toggle";
import Edit from "../component/Edit";
import Delete from "../component/Delete";
import Loader from "../component/Loader";
import axios from "../Api/AxiosApi"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../Styles/viewDay.css";




const ViewcurrentDayTask = () => {
  
  const { userId } = useContext(myContext);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  
  //--------------task is fetching here!!!!!!--------------
  const { tasks,refetchTasks } = useFetchTasks(userId, currentMonth, currentYear, id);
  // console.log(tasks)
  //-----------------filtering todays tasks on tasks------------------
  const todaysTask = tasks.filter((task) => {
    const taskDate = new Date(task.createdAt).toISOString().slice(0, 10); // Convert createdAt to YYYY-MM-DD format
    const currentDay = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    return taskDate === currentDay;
  });
  
//----------useEffect for loader component--------------------
  useEffect(() => {
    let timer;
    if (todaysTask.length === 0) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); 
    } else {
      setIsLoading(false); // If there are tasks, stop loading immediately
    }
    
    return () => clearTimeout(timer); // Clear the timer when the component unmounts or updates
  }, [todaysTask]);

//-------------------------------------------------------------

//------------------------task delete function------------------

   const handleDelete = async (id)=>{
        try{
          const response = await axios.delete(`/delete/todo/tasks/${id}`)
          if(response.status===200){
            await  swal("Success!", response.data.message, "success");
            window.location.reload();
          }
        }catch(error){
          swal("Error!", error.response.data.message, "error");
        }
   } 
   
   //---------------------------------------------------------------

  //  const [initialState, setInitialState] = useState(tasks.status);
  const [toggleKey, setToggleKey] = useState(0); // State for triggering rerender



  return (

    <div className="daytask-container">
    {isLoading ? (
      <Loader />
    ) : todaysTask.length === 0 ? (
      <Notfound/>
    ) : (
      todaysTask.map((item) => (
        <div key={item._id} className="daytask-item">
          <Card2
            title={item.title}
            description={item.description}
             status={item.status}
            
            style={{ color: item.status === "complete" ? "green" : "red" }}
           
          
          />
          <div className="daytask-item-actions">
            <Delete onClick={() => handleDelete(item._id)} />
          <Toggle taskId={item._id} initialStatus={item.status} />
            <Edit />
          </div>
        </div>
      ))
    )}
  </div>

  )
}

export default ViewcurrentDayTask 