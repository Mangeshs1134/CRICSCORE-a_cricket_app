import React from 'react'
import {News}  from '../Hooks/useFetchNews.js'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {setPostId} from '../store/slice'

const NewsCard = ({noOfNews=null}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {allNews, error} = News()
  return (
    <div className=' '>
        <div className="news bg-blue-500 w-[100%] md:w-[screen/5] px-3 text-white font-semibold p-2 ">
            News
        </div>  
        {[...allNews].reverse().map((news)=>(
            
            <div key={news.id} className="card border mt-2 mx-2 rounded flex text-[11px] justify-between"
            onClick={()=>{
                dispatch(setPostId(news.id)) ;
                navigate('/newsPostPage')
            }}
            >
            <div className="image w-1/4 p-2 ">
                <img src={news.image} className='rounded border w-[100px]' alt="ash" />
            </div>
            <div className="titleSide flex flex-col justify-between md:text-[16px] p-2 w-3/4">
                <div className="title text-black">
                    {news.title}
                </div>
                <div className="postedDate md:text-[12px] text-gray-500 text-[10px]">
                    {news.date}
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default NewsCard