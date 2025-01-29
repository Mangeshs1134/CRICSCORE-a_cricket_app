import React from 'react'
import {useSelector} from 'react-redux'

const Status = ({MatchStatus = 'no status'}) => {

  
  
    return ( <>
      <div className='text-[12px] text-red-600 font-semibold ml-3 mt-1'>
          {MatchStatus}
      </div> 
      
  </> )
}

export default Status