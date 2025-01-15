import React from 'react'

const Commentry = () => {
    let over = 10;
    let ball = 0;
    const commentry =  [
        "The bowler runs in, a quick delivery, and it's driven beautifully through the covers for four!",
        "A loud appeal for LBW, but the umpire shakes his head.",
        "That's a massive six! It sails over the deep mid-wicket boundary.",
        "What a catch! The fielder dives full length to his right and takes an absolute stunner.",
        "The batsman nudges the ball to fine leg and scampers through for a quick single.",
        "The spinner flights it up, and the batsman dances down the track to loft it over long-on for a six.",
        "A perfectly timed straight drive races to the boundary. What a shot!",
        "The ball takes the edge and flies past the slip cordon for a boundary.",
        "A brilliant yorker! The batsman is completely beaten, and the stumps are rattled.",
        "The fielder at deep square leg takes it comfortably. The batsman is dismissed for a well-made 50.",
      ];
      

  return (
    <>
    <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5 border-t border-gray-600  ">
        <div className=' w-2/5'>
            Commentry   
            <span className=" mx-2 wave-animation text-xl">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    
        </div>  
    </div>
    <div className="">
        {commentry.map((post)=>(
            <div className='flex px-3 '>
            <div className="overInfo flex flex-col w-2/8  items-center">
               <div>
               {over}.{ball} 
               </div>
               <div className='bg-red-500 w-[20px] flex justify-center items-center text-white rounded-md '>
                1
               </div>
            </div>
            <div className="comment flex pl-3 text-[12px] ">
                {post}
            </div>
        </div>
        ))}
    </div>
    
    </>
  )
}

export default Commentry