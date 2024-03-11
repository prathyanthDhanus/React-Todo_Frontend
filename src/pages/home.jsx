import React from "react";
import { useContext } from "react";
import { myContext } from "../context/contextAPI";
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const Home = () => {

  const { category, setCategory } = useContext(myContext);
  
  const navigate = useNavigate();


 
 
  return (
    <div className="maindiv-home">
    <div className="home-container">
    <h1 className="home-title">My Categories</h1>
    <ul className="task-list">
    {category?.map((task) => (
      <li key={task._id} className="task-item">
      <h2 className="task-title" onClick={()=>{navigate(`/view/month/${task._id}`)}}>{task.categories}</h2>
      <div className="catdelete">
      <RiEdit2Fill onClick={()=>navigate(`/edit/${task.categories}/${task._id}`)}/>
      </div>
     
      </li>
      ))}
      </ul>
      </div>
      </div>
  );
};

export default Home;
