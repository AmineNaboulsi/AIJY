import React , {useEffect, useState} from 'react'

function CardsMoney({message}) {
  return (
    <div>
      <div  className='TodayYesterdaySpend' >
      Cards is : {message}
      </div>
       
    </div>
  )
}

export default CardsMoney