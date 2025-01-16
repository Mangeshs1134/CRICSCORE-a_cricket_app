import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (<>
    <div className="text-xl h-[50px] w-full fixed top-0 p-2 text-white  bg-blue-500 m-0 font-semibold "
    onClick={()=>navigate('/')}
    >
    CricScore
    </div>
    <div className="mt-12"></div>
    </>
  )
}

export default Header