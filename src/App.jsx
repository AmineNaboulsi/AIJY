import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './AppMobile.css'
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import LayoutPage from "./Component/LayoutPage"
import Dashboard from "./Component/Dashborad"
import Notfound from "./Component/NotFound"
import Tasks from "./Component/Tasks"
import Box from "./Component/Box/Box"
import NavBar from "./Component/NavBar"
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ParticlesBackground from "./Component/Particles";
function App() {
  return (
    <>
    <div>
            <ParticlesBackground />
            
            <div className="BodyRoot">
            <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index  path="/" element={<Dashboard />} />
              <Route  path="/dashborad" element={<Dashboard />} />
              <Route  path="/box" element={<Box />} />
              <Route  path="/tasks" element={<Tasks/>} />
              <Route  path="*" element={<Notfound />} />
            </Routes>

            
            </BrowserRouter>
            </div>
    </div>
    
    </>
    
  )
}

export default App
