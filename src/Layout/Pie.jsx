import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import './Style/PieChart.css' ;

function Pie({ ApplyChanged }) {
  return (
    <div className='Pie'>
      <div className="filter">
        <div className='Fbuttons'>
            <button onClick={()=>{ApplyChanged("Day")}}>Day</button>
            <button onClick={()=>{ApplyChanged("Week")}}>Week</button>
            <button onClick={()=>{ApplyChanged("Month")}}>Month</button>
              </div>
              <button className='ApplyButton'>Apply</button>
              
      </div>
       <div className="PieShape">
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C'  ,  arcLabel: '60%'},
          ],
        },
      ]}
      width={400}
      height={200}
    />
       </div>
    </div>
  )
}

export default Pie