import React from 'react'

const NewsPost = () => {

    const news =  {
            newsImage: 'https://static.cricketaddictor.com/images/posts/2024/Ravichandran-Ashwin-1--1.jpg?q=80',
            newsTitle : 'My name is Rohit Sharma',
            postedTime : '26 Jan',
            newsContent : 'orem ipsum dolor sit amet consectetur adipisicing elit. Odio totam vel dicta dolore, laborum ea architecto nam accusantium repellendus tempore necessitatibus excepturi voluptas velit aliquam neque voluptate. Veniam optio tenetur est ducimus sapiente et repellendus quas quae quis quo autem id esse fugit, corporis aspernatur a laborum necessitatibus voluptatem nihil?'
        }
    

  return (
    <>
    <div className="image flex justify-center">
        <img src={news.newsImage} className='max-h-[200px]' alt="newsImage" />
    </div>
    <div className="title mx-3 my-1 font-medium">
        {news.newsTitle}
    </div>
    <div className="postedTime mx-3 text-[10px] text-gray-500">
        {news.postedTime}
    </div>
    <div className="newsContent mx-3 text-[12px] text-gray-700">
        {news.newsContent}
    </div>
    </>
  )
}

export default NewsPost