import { useState, useEffect } from 'react';
import axios from '../Api/AxiosApi';

const useFetchTasks = (userId, month, currentYear, id) => {
   
  const [tasks, setTasks] = useState([]);
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
        
        if (response.status === 200) {
          setTasks(sortedTasks);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [userId, month, currentYear, id]);

  return { tasks, error };
};

export default useFetchTasks;
