import React, { useState } from 'react'
import '../App.css'
import TasksManagerList from '../Layout/TasksManagerList'
import CardsMoney from '../Layout/CardsMoney'
import Calender from '../Layout/Calender'
import PieChart from '../Layout/Pie'
import LineGraph from '../Layout/LineGraph'


function Dashborad() {
  const [msg , setmsg] = useState("test");
  const [CurrentDate , setCurrentDate] = useState(new Date());
  const ApplyChanged = (value) =>{
    setmsg(value);
  }
  const DateChanged = (new_Date) =>{
    setCurrentDate(new_Date);
  }
  return (
    <dashboard>
      <TasksManagerList message={msg} />
      <CardsMoney message={msg}/>
      <Calender DateChanged={DateChanged}/>
      <LineGraph  message={msg}/>
      <PieChart ApplyChanged={ApplyChanged}/>
  </dashboard> 
    
  )
}

export default Dashborad