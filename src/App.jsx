import { useState } from 'react'

import ReactDOM from "react-dom/client";
import './App.css'
import Slide2 from './Components/Slide2'
import HomePage from './Components/HomePage'
import Slide4 from './Components/Slide4'
import Slide5 from './Components/Slide5'
import Slide7 from './Components/Slide7'
import Slide6 from './Components/Slide6'
import Slide3 from './Components/Slide3'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage />}> </Route>
       <Route path="home" element={<HomePage />}> </Route>
       <Route  path="slide2" element={<Slide2 />}> </Route>
       <Route  path="slide3" element={<Slide3 />}> </Route>
       <Route  path="slide4" element={<Slide4 />}> </Route>
       <Route  path="slide5" element={<Slide5 />}> </Route>
       <Route  path="slide6" element={<Slide6 />}> </Route>
       <Route  path="slide7" element={<Slide7 />}> </Route>
       



      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
