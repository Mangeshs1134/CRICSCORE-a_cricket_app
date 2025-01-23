import React from 'react'
import { News } from '../Hooks/useFetchNews'
import { useDispatch, useSelector} from 'react-redux'

const NewsPost = () => {

    const {allNews, error} = News()
    const postId = useSelector((state)=>state.globalPostId.postId)
    // console.log(postId);
    

    return (
    <>
    {allNews.map((news)=> news.id===postId? <div> <div className="image flex justify-center">
        <img src={news.image} className='max-h-[200px]' alt="newsImage" />
    </div>
    <div className="title md:text-[20px] mx-3 my-1 font-medium">
        {news.title}
    </div>
    <div className="postedTime md:text-[14px] mx-3 text-[10px] text-gray-500">
        {news.date}
    </div>
    <div className="newsContent mx-3 text-[12px] md:text-[16px] text-gray-700">
        {news.content}
    </div></div>:null
)}
    </>
  )
}

export default NewsPost