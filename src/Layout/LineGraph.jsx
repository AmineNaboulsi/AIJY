import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

function LineGraph() {
  const uData = [20, 30, 18, 13, 22, 32, 44];
const xLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'frid',
  'Sat',
];
  return (
    <div className='LineChart'>
     <LineChart
      width={500}
      height={300}
      series={[
        { data: uData, label: 'Mad' },
      ]}
      xAxis={[
        {
          scaleType: 'point',
          data: xLabels,
          sx: { fontSize: 14 }, // Change font size for X-axis
        },
      ]}
      yAxis={[
        {
          sx: { fontSize: 14 }, // Change font size for Y-axis
        },
      ]}
      sx={{
        '.MuiLineChart-line': {
          strokeWidth: 2,
        },
        '.MuiLineChart-grid': {
          stroke: '#ddd',
        },
      }}
    />
    </div>
  )
}

export default LineGraph