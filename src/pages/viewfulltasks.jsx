import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from '../Api/AxiosApi';

const Viewfulltasks = () => {

    const {id} = useParams();
    const[tasks,setTasks] = useState([])
    console.log(id);

    useEffect(()=>{
        const fetchData = async () => {

            try {
              const response = await axios.get(`/get/todo/tasks/${id}`)
              const data = response.data.data;
              console.log(data);
              setTasks([data])
             
            } catch (error) {
              console.log("Error", error)
            }
      
          }
          fetchData()
    },[id])

  return (

    <div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td onClick={() =>navigate(`/view/full/tasks/${item._id}`)} >{item.title}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Viewfulltasks