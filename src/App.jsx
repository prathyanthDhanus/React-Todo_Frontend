
import Home from './pages/Home';
import Addtask from './pages/Addtask';
import Viewtasks from './pages/Viewtasks';
import { myContext } from './context/contextAPI';
import { Route, Routes } from 'react-router-dom';
import Viewcategories from './pages/ViewcurrentDaytask';
import LoginComponent from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCategoryData } from './Functions/GetCategory';
import Viewmonth from "./pages/Viewmonth"
import Editcategory from './pages/Editcategory';
import ViewcurrentDayTask from './pages/ViewcurrentDaytask';
import Profilestatus from './pages/Profilestatus';

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
  <Route path='/view/current/day/tasks/:id' element={<ViewcurrentDayTask/>}/>
  <Route path='/user/login' element={<LoginComponent/>}/>
  <Route path='/user/signup' element={<Signup/>}/>
  <Route path='/view/month/:id' element={<Viewmonth/>}/>
  <Route path='/edit/:category/:id' element={<Editcategory/>}/>
  <Route path='/view/profile' element={<Profilestatus/>}/>
     
  </Routes>
  
  </myContext.Provider>
  
  )
}

export default App
