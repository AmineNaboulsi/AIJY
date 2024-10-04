import React, { useState } from 'react'
import '../App.css'
import TasksManagerList from '../Layout/TasksManagerList'
import CardsMoney from '../Layout/CardsMoney'
import Calender from '../Layout/Calender'
import PieChart from '../Layout/PieChart'
import LineGraph from '../Layout/LineGraph'


function Dashborad() {
  const [msg , setmsg] = useState("test");
  const ApplyChanged = (value) =>{
    setmsg(value);
  }
  return (
    <dashboard>
       <TasksManagerList message={msg} />
       <CardsMoney message={msg}/>
       <Calender message={msg}/>
       <PieChart ApplyChanged={ApplyChanged}/>
       <LineGraph  message={msg}/>
       
    </dashboard>
  )
}

export default Dashborad