import React, { useState } from 'react';
import axios from '../Api/AxiosApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style.css";

const Home = () => {

 
//---------------------submit function-------------------------

const handleSubmit = async(e)=>{

e.preventDefault();
const title = e.target.elements.title.value;
const description = e.target.elements.task.value;

const data = {
  title,
  description
}
// console.log(data);
try {
  // Send data to the backend
  const response = await axios.post("/add/todo/tasks",data)

  console.log("Task added successfully:", response.data);
  e.target.reset();
} catch (error) {
  console.error("Error adding task:", error);
}
}
//--------------------------------------------------------------
  return (

    <div  className='todoDiv' >
      <h1 >Todo List</h1>
     <div>
     <Form onSubmit={handleSubmit} >

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Title" name='title' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          
          <Form.Control as="textarea" rows={3}  type='text'
           placeholder='What is your task today?' name='task'/>
        </Form.Group>
        <Button variant="success" type='submit' className='todo-Btn'>Add task</Button>
      </Form> 
     </div>
        
       
      
    </div>

  

    
  )
}

export default Home