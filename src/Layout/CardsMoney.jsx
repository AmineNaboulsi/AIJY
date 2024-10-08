import React , {useEffect, useState} from 'react'
import './Style/CardsMoney.css'
function CardsMoney({message}) {

  return (
    <div  className='TodayYesterdaySpend' >
        <div className="Today">
          <div className='titleCard'>today</div>
          <div className="price">
            <h2>ezvfdnbtdnd,d MAD</h2>
            <span className="reset">-Reset</span></div>
          <div className="amonthspend">For now ( - 150 MAD)</div>
          <div className="viewrep">
            <hr className='barhr'/>
            <div className="repview">View Report</div>
          </div>
        </div>
        <div className="Yesterday">
          <div className="titlle1">Yesterday</div>
          <div className="payment">
            -152 MAD</div>
          </div>
      </div>
  )
}

export default CardsMoney