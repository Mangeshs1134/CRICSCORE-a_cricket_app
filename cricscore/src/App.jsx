import React from 'react'
import { Outlet } from 'react-router-dom'
import TestComponent from './components/TestComponent'

const App = () => {
  return (
    <div className='md:w-full md:flex justify-center '>
    <div className='md:w-4/5  '>

      <Outlet/>
      {/* <TestComponent/> */}
    </div>
    </div>
  )
}

export default App