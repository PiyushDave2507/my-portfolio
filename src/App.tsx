import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/navbar/index'
import {Home, About, Services, Project, Contact} from './pages'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Index />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App