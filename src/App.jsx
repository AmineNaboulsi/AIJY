import './App.css'
import './AppMobile.css'
import {useState} from "react"
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Dashboard from "./Component/Dashborad"
import Notfound from "./Component/NotFound"
import Tasks from "./Component/Tasks"
import Box from "./Component/Box/Box"
import NavBar from "./Component/NavBar"
import SliderBar from "./Component/SlideBar"

import ParticlesBackground from "./Component/Particles";
function App() {

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <>
    <div>
            <ParticlesBackground />
            <div className="BodyRoot">
            <BrowserRouter>
            <NavBar toggleSlider={toggleSlider} />
            <SliderBar isOpen={isSliderOpen} toggleSlider={toggleSlider}  />
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
