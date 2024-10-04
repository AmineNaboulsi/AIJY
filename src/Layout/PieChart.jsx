import React from 'react'

function PieChart({ ApplyChanged }) {
  return (
    <div className='PieChart'>PieChart
       <button onClick={()=>{ApplyChanged("Day")}}>Day</button>
       <button onClick={()=>{ApplyChanged("Week")}}>Week</button>
       <button onClick={()=>{ApplyChanged("Month")}}>Month</button>
    </div>
  )
}

export default PieChart