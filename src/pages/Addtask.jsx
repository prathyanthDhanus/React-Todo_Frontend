import React, { useState } from 'react';
import axios from '../Api/AxiosApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContext } from '../context/contextAPI';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../Styles/addTask.css";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


const Addtask = () => {
  const { userId } = useContext(myContext);
  const [value, onChange] = useState(new Date());
  console.log("s",userId);
  console.log(value)
//---------------------submit function-------------------------

const handleSubmit = async(e)=>{

e.preventDefault();
const data = {
   title : e.target.title.value,
   description : e.target.task.value,
}
// const userId = localStorage.getItem('userId');

console.log(data);
try {
  // Send data to the backend
  const response = await axios.post(`/add/todo/tasks/${userId}`,data)

  console.log("Task added successfully:", response.data);
  e.target.reset();
} catch (error) {
  console.error("Error adding task:", error);
}
}
//--------------------------------------------------------------
  return (

    <div className="container">
  <h1 className="heading">Add Task</h1>
  <div className="form-container">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Title" name='title' />
      </Form.Group>

      <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3}  type='text'
           placeholder='What is your task today?' name='task'/>
      </Form.Group>
      <DropdownButton id="dropdown-basic-button" title="Select Category" className="dropdown-btn">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <DatePicker onChange={onChange} value={value} />
      <Button variant="success" type='submit' className='todo-Btn'>Add task</Button>
    </Form> 
  </div>
</div>

  )
}

export default Addtask