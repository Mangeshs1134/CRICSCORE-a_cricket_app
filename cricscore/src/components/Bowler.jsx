import React from 'react'

const Bowler = () => {
  return (
    <>
    <div className="my-1 flex text-[10px] text-gray-600 px-3 py-0.5   border border-gray-400">
        <div className=' w-2/5'>
            Bowler
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">O</div>
            <div className="w-1/5">M</div>
            <div className="w-1/5">R</div>
            <div className="w-1/5">W</div>
            <div className="w-1/5">ER</div>
        </div>
    </div>
    <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            R Ashwin
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">100</div>
            <div className="w-1/5">10</div>
            <div className="w-1/5">4</div>
            <div className="w-1/5">6</div>
            <div className="w-1/5">100</div>
        </div>
    </div>
    
    </>
  )
}

export default Bowler