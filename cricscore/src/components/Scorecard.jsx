import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'

const Scorecard = () => {
    const batters = [
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Virat Kohli",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Virat Kohli",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Virat Kohli",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Virat Kohli",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Rohit Sharma",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
        {
            name : "Virat Kohli",
            runs : 200,
            balls : 100,
            fours : 10,
            six : 10,
            out : 1,
            caught : 1,
            caughtby : 'kishan',
            bowledby : 'bumrah',
            get strike_rate(){
                return (this.runs/this.balls)*100;
            }
        },
    ]
    const bowlers = [
        {
            name : 'Bumrah',
            maidens : 0,
            overs : 4,
            runs : 20,
            wickets : 2,
            economy : 6
        },
        {
            name : 'Bumrah',
            maidens : 0,
            overs : 4,
            runs : 20,
            wickets : 2,
            economy : 6
        },
        {
            name : 'Bumrah',
            maidens : 0,
            overs : 4,
            runs : 20,
            wickets : 2,
            economy : 6
        },
        {
            name : 'Bumrah',
            maidens : 0,
            overs : 4,
            runs : 20,
            wickets : 2,
            economy : 6
        },
        {
            name : 'Bumrah',
            maidens : 0,
            overs : 4,
            runs : 20,
            wickets : 2,
            economy : 6
        },
    ]

    const team = useSelector(state=> state.globalTeam)
    const [toggle, setToggle] = useState('team1')
  return (
    <>
    {/* toggle of team name */}
    <div className="flex h-[40px]">
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team1'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team1' ? null : setToggle("team1") }
        >
            <div className='mx-2'>
            {team.team1}
            </div>
            <div>
                396-10
            </div>
        </div>
        <div className={`w-1/2 flex justify-center items-center text-white font-semibold ${toggle==='team2'? 'bg-blue-400 ': 'bg-blue-500'}`}
        onClick={()=> toggle==='team2' ? null : setToggle("team2") }
        >
             <div className='mx-2'>
            {team.team2}
            </div>
            <div>
                396-10
            </div>
        </div>
    </div>
    {/* Batters ScoreCard */}
    <div className="py-0.5 bg-gray-400  flex text-[10px] text-gray-600 px-3   border border-gray-400">
        <div className=' w-2/5'>
            Batter
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">R</div>
            <div className="w-1/5">B</div>
            <div className="w-1/5">4s</div>
            <div className="w-1/5">6s</div>
            <div className="w-1/5">SR</div>
        </div>
    </div>
{/* looping for scorcard */}
    {batters.map((player)=>(
        <div className=" border flex text-[12px] text-gray-600 px-3 py-1   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.name}
            <div className='text-gray-600 text-[10px]'>
            {player.out && player.caught ? `c ${player.caughtby}`:'' }
            {player.out  ? ` b ${player.bowledby}`:'' }
            </div>
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{player.runs}</div>
            <div className="w-1/5">{player.balls}</div>
            <div className="w-1/5">{player.fours}</div>
            <div className="w-1/5">{player.six}</div>
            <div className="w-1/5">{player.strike_rate}</div>
        </div>
    </div>
    ))}

    {/* extras */}
    <div className="extras flex border h-[30px] border-gray-400">
        <div className="text w-3/5 px-3 flex justify-start items-center">
            Extras
        </div>
        <div className="count w-2/5 flex px-3  justify-end items-center">
            20
        </div>
    </div>
 {/* Bowlers ScoreCard */}
 <div className="py-0.5 bg-gray-400  flex text-[10px] text-gray-600 px-3   border border-gray-400">
        <div className=' w-2/5'>
            Bowlers
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">O</div>
            <div className="w-1/5">M</div>
            <div className="w-1/5">R</div>
            <div className="w-1/5">W</div>
            <div className="w-1/5">ER</div>
        </div>
    </div>
    {/* looping for bowler */}
    {bowlers.map((player)=>(
        <div className="my-1 flex text-[12px] text-gray-600 px-3 py-0.5   ">
        <div className=' w-2/5 text-sky-600 font-[900]'>
            {player.name}
        </div>
        <div className="w-3/5 flex justify-between">
            <div className="w-1/5">{player.overs}</div>
            <div className="w-1/5">{player.maidens}</div>
            <div className="w-1/5">{player.runs}</div>
            <div className="w-1/5 font-semibold text-black">{player.wickets}</div>
            <div className="w-1/5">{player.economy}</div>
        </div>
    </div>
    ))}
    
   
    </>
  )
}

export default Scorecard