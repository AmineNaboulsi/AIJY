import React , {useState , useEffect} from 'react'


function Calender({message}) {
  return (
    <div className='Calendar'> Calender is : {message}
    <br />Day picked :  <input type='number' /></div>
  )
}

export default Calender