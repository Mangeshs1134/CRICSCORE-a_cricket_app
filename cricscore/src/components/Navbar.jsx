import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const team = useSelector(state=> state.globalNav)
        const [toggle, setToggle] = useState('')
  return (
    <>
      <div className="sticky bottom-0 flex h-[40px]">
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='matches'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> { setToggle("matches");navigate('/matchList')} }
        >
            <div className='mx-2'>
            Matches
            </div>
           
        </div>
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='news'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> { setToggle("news"); navigate('/newsList')} }
        >
             <div className='mx-2'>
            News
            </div>
           
        </div>
    </div>
    
    </>
  )
}

export default Navbar