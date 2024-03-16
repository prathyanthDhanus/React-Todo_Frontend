
import axios from "../Api/AxiosApi";

// const { userId } = useContext(myContext);
// const { category,setCategory } = useContext(myContext);

export const fetchCategoryData = async (userId,setCategory) => {
  
    try {
      const response = await axios.get(`/get/todo/category/${userId}`);
      setCategory(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  
 