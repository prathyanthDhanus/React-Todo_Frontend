import axios from "axios";


// const accessToken = localStorage.getItem("accessToken");

const myAxiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Set a base URL for all requests
    headers: {
      'Content-Type': 'application/json', // Set default headers
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example authorization header
    },
    timeout: 5000, // Set a timeout for requests in milliseconds
  });


  export default myAxiosInstance;