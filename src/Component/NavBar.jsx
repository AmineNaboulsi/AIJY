import React from 'react'
import '../App.css'


function NavBar() {
return (
    <>
    <nav>
    <div className='BarNav'>
        <div className='Logo' >AIJY</div>
        <div className='Menu'>
        <div className="active">Dashboard</div>
        <div className="Option" >Tasks</div>
        <div className="Option">Box</div>
        </div>
        <div className='LightMode'>light</div>
    </div>
    </nav>
    </>
  )
}

export default NavBar