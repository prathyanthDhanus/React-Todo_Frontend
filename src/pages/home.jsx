import React, { useEffect, useState } from "react";
import CustomCard from "../component/Card";
import axios from "../Api/AxiosApi";
import { useContext } from "react";
import { myContext } from "../context/contextAPI";
import { FaFolderOpen } from "react-icons/fa";
import "../Styles/home.css"


const Home = () => {
  // const { userId } = useContext(myContext);
  // console.log("user", userId);
  const { category, setCategory } = useContext(myContext);

 
 
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await axios.get(`/get/todo/category/${userId}`);
  //       setCategory(response.data.data);
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };

  //   fetchCategory();
  // }, [userId, setCategory]);
  

  return (
    <div className="maindiv-home">
    <div className="home-container">
    <h1 className="home-title">My Categories</h1>
    <ul className="task-list">
    {category.map((task) => (
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
