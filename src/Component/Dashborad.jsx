import React from 'react'
import '../App.css'
import TasksManagerList from '../Layout/TasksManagerList'

function Dashborad() {
  return (
    <dashboard>

      <TasksManagerList />

      <div className="TodayYesterdaySpend">
      TodayYesterdaySpend
      <br />
      TodayYesterdaySpend
      </div>

      <div className="Calendar">
        Calenddar
      </div>

    </dashboard>
  )
}

export default Dashborad