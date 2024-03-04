import React from "react";
import { useContext } from "react";
import { myContext } from "../context/contextAPI";
import { FaFolderOpen } from "react-icons/fa";
import "../Styles/home.css"


const Home = () => {

  const { category, setCategory } = useContext(myContext);
  
  return (
    <div className="maindiv-home">
    <div className="home-container">
    <h1 className="home-title">My Categories</h1>
    <ul className="task-list">
    {category?.map((task) => (
      <li key={task.id} className="task-item">
      <h2 className="task-title">{task.categories}</h2>
      <FaFolderOpen className="folder-icon" />  
      </li>
      ))}
      </ul>
      </div>
      </div>
  );
};

export default Home;
