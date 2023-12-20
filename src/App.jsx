
import Home from './pages/home';
import Viewtasks from './pages/viewtasks';
import { myContext } from './context/contextAPI';
import { Route, Routes } from 'react-router-dom';
import Viewfulltasks from './pages/viewfulltasks';

function App() {
 

  return (

  <myContext.Provider >
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/view/tasks' element={<Viewtasks/>}/>
  <Route path='/view/full/tasks/:id' element={<Viewfulltasks/>}/>
  </Routes>
  
  </myContext.Provider>
  
  )
}

export default App
