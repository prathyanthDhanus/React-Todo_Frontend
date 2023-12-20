import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Viewtasks = () => {
    const[tasks,setTasks]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {

            try {
              const response = await axios.get('http://localhost:3000/get/todo/tasks')
              const data = response.data.data;
              console.log(data);
              setTasks(data)
             
            } catch (error) {
              console.log("Error", error)
            }
      
          }
          fetchData()
    },[])

  return (
    <div>
 
  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
         
        </tr>
      </thead>
      <tbody>
      {tasks.map((item, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td onClick={() =>navigate(`/view/full/tasks/${item._id}`)} >{item.title}</td>
        </tr>
      ))}
      </tbody>
    </Table>
</div>

  )
}

export default Viewtasks