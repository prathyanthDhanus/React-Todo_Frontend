import React, { useContext, useEffect, useState } from "react";
import axios from "../Api/AxiosApi";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { myContext } from "../context/contextAPI";
import Notfound from "../component/Notfound";



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
        console.log(response)
        if(response.status===200){
          setTasks(data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
    {error?(
      <Notfound />
      ) : (
      tasks?.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>{item.status}</div>
        </div>
      ))
    )}
  </>
  );
};

export default Viewtasks;
