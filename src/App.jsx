
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/register'
import Indexpages from './pages/indexpages'
import Logingpage from './pages/Logingpage'
import Layout from './layout'
import axios from 'axios'

axios.defaults.baseURL="http://localhost:4000"
  
function App() {
  

  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Indexpages/>}/>
    <Route path="/loging" element={<Logingpage/>}/>
    <Route path='/register' element={<Register/>}/>
    </Route>
    
    </Routes>
   
  )
}

export default App
