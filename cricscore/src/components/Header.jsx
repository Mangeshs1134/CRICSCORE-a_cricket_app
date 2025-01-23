import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { toggleMenu } from '../store/slice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (<>
    <div className="text-xl h-[50px] w-[100%] md:text-[24px] md:w-4/5 fixed top-0 p-2 text-white  bg-blue-500 m-0 font-semibold "
    // onClick={()=>navigate('/')}
    onClick={()=> {dispatch(toggleMenu('live')); navigate('/')}}
    >
    CricScore
    </div>
    <div className="mt-12 "></div>
    </>
  )
}

export default Header