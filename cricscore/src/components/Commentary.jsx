import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {commentry as useCommwntryHook} from '../Hooks/useCommwntryHook'
import {currentMatch} from '../Hooks/useCurrentMatch'

const Commentary = () => {

    const matchId = useSelector((state)=>state.globalMatchId.matchId)
    const reloadKey = useSelector((state)=>state.reload.reloadKey)

    // Calling custom hook at top level
    const { commentry, commentryError} = useCommwntryHook()
    
    const [commentryData, setCommentryData] = useState([])
    useEffect(()=>{
        
        if (commentry && !commentryError) {
            setCommentryData((prev)=>[ ...commentry])
        }else if(commentryError){
            console.log('commentry ERROR', commentryError);
            
        }
    },[reloadKey, commentry, commentryError])

    
  return (
    <>
    <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5 border-t border-gray-600  ">
        <div className=' w-2/5'>
            Commentary   
            <span className=" mx-2 wave-animation text-xl">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    
        </div>  
    </div>
    <div className="">
        { commentryData.reverse().map((comment)=> comment.match===matchId? (
            
            <div className='flex px-3 border border-blue-300 py-1.5 '>
            <div className="overInfo flex flex-col w-2/8  items-center">
               <div>
                {comment.ballNumber>0? <span>{parseInt(comment.ballNumber/6)}.{comment.ballNumber%6}</span> : null}
               </div>
               {comment.runs === 4 ? <div className='bg-green-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                4
               </div>:null}
               {comment.runs === 6 ? <div className='bg-pink-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                6
               </div>:null}
               {comment.runs === -1 ? <div className='bg-red-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                w
               </div>:null}
               {comment.runs === 0 ? <div className='bg-gray-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                0
               </div>:null}
               {comment.runs === 1 ? <div className='bg-blue-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                1
               </div>:null}
               {comment.runs === 2 ? <div className='bg-blue-500 w-[18px] p-0.5 text-[11px] flex justify-center items-center text-white rounded-xl '>
                2
               </div>:null}
               {comment.runs === 3 ? <div className='bg-blue-500 w-[18px] p-0.5  text-[11px] flex justify-center items-center text-white rounded-xl '>
                3
               </div>:null}
            </div>
            <div className="comment flex flex-col pl-3 text-[12px] ">
                <div>
                 <span className='font-semibold mr-1'>{comment.bowler_name}</span>
                {/* {[...strikeBowler].map((player)=>(<span className='font-semibold mr-1'>{player.get_name}</span>))} */}
                 to
                 <span className='font-semibold ml-1'>{comment.batter_name}</span>
                {/* {[...strikerBatter].map((player)=>(<span className='font-semibold ml-1'>{player.get_name}</span>))} */}

                </div>
                <div>
                    {comment.defaultCommentry ? comment.defaultCommentry : comment.commentryText}
                </div>
            </div>
        </div>
        ):null)}
    </div>
    
    </>
  )
}

export default Commentary