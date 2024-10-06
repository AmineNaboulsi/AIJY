import React, { useState } from 'react'
import "./Style/slidebar.css"
import { SiAlpinedotjs } from "react-icons/si";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";

function SlideBar({ isOpen, toggleSlider }) {
    const navige = useNavigate();
    const HandledMenuCLick = (index) =>{
      if(index == 1){
        navige('/');
        toggleSlider(false);
      }else if(index == 2){
        navige('/tasks');
        toggleSlider(false);
      }else if(index == 3){
        navige('/box');
        toggleSlider(false);
      }
    }
   
  return (
    <div className={isOpen?'SlideModeOpen':"SlideModeClose"}>
        <div className={isOpen?'slidebarleft':"slidebarleftclose"}>
            <div className='titleslider'>
                <SiAlpinedotjs style={{height : "50px" , width : "50px" }} />
                <IoAddSharp onClick={toggleSlider} className='exitslider' />
            </div>
            <div className="slidercontent">
                <div onClick={()=> HandledMenuCLick(1)} className='Itemslider' >
                    <MdSpaceDashboard />
                    <span>
                        Dashboard
                    </span></div>
                <div onClick={()=> HandledMenuCLick(2)} className='Itemslider' >           
                    <MdSpaceDashboard />
                    <span>
                        Tasks
                    </span>
                </div>
                <div onClick={()=> HandledMenuCLick(3)} className='Itemslider' >
                    <MdSpaceDashboard />
                    <span>
                        Box
                    </span>
                </div>
            
            </div>
        </div>
        <div onClick={toggleSlider}  className="restslider"></div>
    </div>
    
  )
}

export default SlideBar