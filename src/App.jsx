
import Home from './pages/home';
import Addtask from './pages/Addtask';
import Viewtasks from './pages/viewtasks';
import { myContext } from './context/contextAPI';
import { Route, Routes } from 'react-router-dom';
import Viewcategories from './pages/Viewcategories';
import LoginComponent from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCategoryData } from './Functions/GetCategory';
import Viewmonth from "./pages/Viewmonth"
import Editcategory from './pages/Editcategory';

function App() {
 
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [category,setCategory] = useState([]);
  

  
 const contextValue = {
  userId,
  category,setCategory
 }

 //---------------------------------------------------
 
 useEffect(() => {
  const fetchData = async () => {
    await fetchCategoryData(userId, setCategory); //getting category names
  };

  fetchData();
}, [userId, setCategory]);

//-----------------------------------------------------

  return (

  <myContext.Provider value={contextValue}>
  <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/add/task' element={<Addtask/>}/>
  <Route path='/view/tasks/:month/:id' element={<Viewtasks/>}/>
  <Route path='/view/full/categories/:id' element={<Viewcategories/>}/>
  <Route path='/user/login' element={<LoginComponent/>}/>
  <Route path='/user/signup' element={<Signup/>}/>
  <Route path='/view/month/:id' element={<Viewmonth/>}/>
  <Route path='/edit/:category/:id' element={<Editcategory/>}/>
  

  </Routes>
  
  </myContext.Provider>
  
  )
}

export default App
