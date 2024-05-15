/* eslint-disable no-unused-vars */
import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, time, source} = props;
    return (
      <>
        <div className=' text-white'>
          <div className=' w-[17rem] bg-gray-800 shadow-2xl mb-[3rem] justify-between space-y-2 flex py-5 flex-col'>
          <div className=' text-center mb-2'>
            <button disabled className=' bg-red-500 rounded-3xl w-[90%] font-bold text-white'>{source}</button>
          </div>
            <img className='w-[100%] h-[10rem]' src={imageUrl} alt="" />
            <h2 className=' ml-2'>{title}...</h2>
            <p className=' ml-2'>{description}...</p>
            <p className=' text-sm ml-2 py-8'>By : {author?author:"Unknown"} on Date : {new Date(time).toUTCString()}</p>
            <a target='_blank' href={newsUrl} rel="noreferrer"><button className=' ml-2 w-[6rem] h-[2.5rem] rounded-lg bg-blue-500 text-white '>Read More</button></a>
          </div>
        </div>
      </>
    )
  }

  export default NewsItem