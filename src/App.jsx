
import Home from './pages/home';
import Viewtasks from './pages/viewtasks';
import { myContext } from './context/contextAPI';
import { Route, Routes } from 'react-router-dom';
import Viewfulltasks from './pages/viewfulltasks';
import LoginComponent from './pages/Login';
import Signup from './pages/Signup';

function App() {
 

  return (

  <myContext.Provider >
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/view/tasks' element={<Viewtasks/>}/>
  <Route path='/view/full/tasks/:id' element={<Viewfulltasks/>}/>
  <Route path='/user/login' element={<LoginComponent/>}/>
  <Route path='/user/signup' element={<Signup/>}/>
 
  
  </Routes>
  
  </myContext.Provider>
  
  )
}

export default App
