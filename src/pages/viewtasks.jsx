import React, { useContext, useEffect, useState } from "react";
import axios from "../Api/AxiosApi";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { myContext } from "../context/contextAPI";
import Notfound from "../component/Notfound";
import "../Styles/viewTasks.css"
import CustomCard from "../component/Card";
import { Button } from "react-bootstrap";

const Viewtasks = () => {

  const { id, month } = useParams();
  const { userId } = useContext(myContext);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [error, setError] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      const params = {
        month: month,
        year: currentYear,
        categoryId: id,
      };
      try {
        const response = await axios.get(`/get/todo/tasks/${userId}`, {
          params,
        });
        const data = response.data.data;
        const sortedTasks = data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });

        
        if(response.status===200){
          setTasks(sortedTasks)
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="task-card">
    {error ? (
      <Notfound />
    ) : (
      tasks?.map((item) => (
        <div className="task-card-item" key={item._id} >
          <CustomCard
            title={item.title}
            cardtext={item.description}
          />

          <div className="taskdate">{item.createdAt}</div>
          <div style={{ color: item.status === 'incomplete' ? 'red' : 'green',  }}>
              {item.status}
            </div>
          
        </div>
      ))
    )}
  </div>
  );
};

export default Viewtasks;
