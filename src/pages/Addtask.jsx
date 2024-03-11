import React, { useState } from 'react';
import axios from '../Api/AxiosApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContext } from '../context/contextAPI';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-date-picker';
import swal from 'sweetalert';
import "../Styles/addTask.css";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const Addtask = () => {
  const { userId } = useContext(myContext);
  const { category, setCategory } = useContext(myContext);
  const [value, onChange] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategory, setNewCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddNewCategory = (e) => {
    e.stopPropagation();
    setCategory([...category, { categories: newCategory }]);
    setSelectedCategory(newCategory);
    setNewCategory('');
  };

//---------------------submit function-------------------------

const handleSubmit = async(e)=>{

e.preventDefault();
const data = {
  title: e.target.title.value.toUpperCase(),
   description : e.target.task.value,
   category: selectedCategory.toUpperCase(),
   createdAt:value
}
console.log("data",data);
try {
  // Send data to the backend
  const response = await axios.post(`/add/todo/tasks/${userId}`,data)
   
  if(response.status===201){
    await  swal("Success!", response.data.message, "success");
    e.target.reset(); // Reset the form
    window.location.reload();
  }
 
} catch (error) {
  console.log(error);
  swal("Error!", error.response.data.message, "error");
}
}
//--------------------------------------------------------------
// useEffect(() => {
//   const script = document.createElement('script');
//   script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
//   document.body.appendChild(script);

//   return () => {
//     document.body.removeChild(script); // Clean up on unmount
//   };
// }, []);


  return (
    // <div className='maincontainer'>
    // <div className="container-addtask">
    // <h1 className="heading">Add Task</h1>
    // <div className="form-container">
    // <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
    //     <Form.Control type="text" placeholder="Title" name='title'  />
    //     </Form.Group>
        
    //     <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlTextarea1">
    //     <Form.Control as="textarea" rows={3} type='text' placeholder='What is your task today?' name='task' />
    //     </Form.Group>
        
    //     {category.length > 0 ? (
    //       <div className="dropdown-btn">
    //       <DropdownButton id="dropdown-basic-button" title={selectedCategory   || "Select Category"} >
    //       {category.map((task, index) => (
    //         <Dropdown.Item key={index} onClick={() => handleCategorySelect(task.categories)}>
    //         {task.categories}
    //         </Dropdown.Item>
    //         ))}
    //         <Dropdown.Item onClick={(e) => e.stopPropagation()}>
    //         <Form.Control
    //         type="text"
    //         placeholder="Add new category"
    //         value={newCategory}
    //         onChange={handleNewCategoryChange}
    //         />
    //         </Dropdown.Item>
    //         <Dropdown.Item>
    //         <Button variant="primary" onClick={handleAddNewCategory}>
    //         Add
    //         </Button>
    //         </Dropdown.Item>
    //         </DropdownButton>
    //         </div>
    //         ) : (
    //           <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput2">
    //         <Form.Control type="text" placeholder="Add new category" value={newCategory} onChange={handleNewCategoryChange} />
    //         <Button variant="primary" onClick={handleAddNewCategory}>
    //         Add
    //         </Button>
    //         </Form.Group>
    //     )}
    //     <div className='calender-addtask'>
    //     <DatePicker onChange={onChange} value={value} />
    //     </div>
    //     <Button variant="success" type='submit' className='todo-Btn'>Add task</Button>
    //     </Form>
    //     </div>
    //     </div>
    //     </div>
    <div className='taskmain'>
    
    <div className="meeting">
    <div className="form-container">
    <Form onSubmit={handleSubmit}>
    <div className="form-group">
    <label className="label">Title</label>
    <input className="addtaskinput" type="text" name='title'  />
    </div>
    <div className="form-group">
        <label className="label">Description</label>
        <textarea className="addtaskinput" name='task'  />
        </div>
        <div className="date-picker">
        <label className="label">Due Date</label>
        <input className="addtaskinput" type="date" name='createdAt' />
        </div>
        
        <div className='categery-grp'>
        {category.length > 0 ? (
          <div className="dropdown-btn">
          <DropdownButton id="dropdown-basic-button" title={selectedCategory   || "Select Category"} >
          {category.map((task, index) => (
            <Dropdown.Item key={index} onClick={() => handleCategorySelect(task.categories)}>
            {task.categories}
            </Dropdown.Item>
          ))}
          <Dropdown.Item onClick={(e) => e.stopPropagation()}>
          <Form.Control
          type="text"
          placeholder="Add new category"
          value={newCategory}
          onChange={handleNewCategoryChange}
          />
          </Dropdown.Item>
          <Dropdown.Item>
          <Button variant="primary" onClick={handleAddNewCategory}>
          Add
          </Button>
          </Dropdown.Item>
          </DropdownButton>
          </div>
          ) : (
            <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput2">
            <Form.Control type="text" placeholder="Add new category" value={newCategory} onChange={handleNewCategoryChange} />
            <Button variant="primary" onClick={handleAddNewCategory}>
            Add
            </Button>
            </Form.Group>
            )}</div>
            <div className="actions">
            <button className="create-task-button " type='submit' >Add Task</button>
            </div>
            </Form>
            </div>
            </div>
            </div>
            )
          }
          
          export default Addtask