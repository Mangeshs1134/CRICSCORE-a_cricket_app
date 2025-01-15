import React from 'react'

const VideoCard = () => {
    const videos = [
        {
            videoImg : '',
            videoName : ''
        }
    ]
  return (
    <div className=' '>
        <div className="news bg-blue-500 w-screen px-3 text-white font-semibold p-2 ">
            Videos
        </div>
        
        {news.map((newss)=>(
            <div className="card border mt-2 mx-2 rounded flex text-[11px] justify-between">
            <div className="image w-1/4 p-2 ">
                <img src={newss.newsImage} className='rounded border' alt="ash" />
            </div>
            <div className="titleSide p-2 w-3/4">
                <div className="title text-black">
                    {newss.newsTitle}
                </div>
                <div className="postedDate text-gray-500 text-[10px]">
                    {newss.postedDate}
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default VideoCard