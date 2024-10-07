import React , {useEffect, useState} from 'react'
import { MdArrowOutward  } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
  import './Style/CardsMoneyJawad.css'
function CardsMoneyJawad({message}) {
  return (
    <div  className='TodayYesterdaySpend' >
        <div className="Today">
          <div className='titleCard'>today</div>
          <div className="price">
            <h2>356 MAD</h2>
            <span className="reset">-Reset</span></div>
          <div className="amonthspend">For now ( - 150 MAD)</div>
          <div className="viewrep">
            <hr className='barhr'/>
            <div className="repview">View Report</div>
          </div>
        </div>
        <div className="Yesterday">
          <div className="titlle1">
            <p>Yesterday</p>
          </div>
          <div className="payment">
            <p>-152 MAD</p>
          </div>
          <div className="Percentage">
            <div style={{display:"flex",placeItems:"center",fontWeight : "100"}}  className='Pers'>
              <MdArrowOutward />
              <p>15%</p>
            </div>
            <p className='minus'>- 190 MAD</p>
          </div>
          <div className="ViewPort">
            <p>View Report</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
  )
}

export default CardsMoneyJawad