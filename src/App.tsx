import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/navbar/index'
import {Home, Services, Project, Contact} from './pages'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Index />
      <Routes>
        <Route path='/' element={<Home />} />
<<<<<<< HEAD
        
=======
>>>>>>> c77b27862229af3368779406f8288793a66bd124
        <Route path='/services' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App