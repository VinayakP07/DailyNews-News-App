/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const[articles, setArticles] = useState([]);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);
  const[loading, setLoading] = useState(false);
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  if((!(props.category === "general"))){
    (document.title = capitalizeFirstLetter(props.category)+" - DailyNews")
  }
  else{
    document.title = "DailyNews - Get The Daily Dose Of News Here!"
  }
  
const updateNews = async() => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6274ebd5ac4345188c08afd764b1079d&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  props.setProgress(50)
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);
}

useEffect(()=>{
  updateNews();
},[])


const fetchMoreData = async() => {
  props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6274ebd5ac4345188c08afd764b1079d&page=${page+1}&pageSize=${props.pageSize}`;
  setLoading(true)
  props.setProgress(50);
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  setPage(page+1);
  props.setProgress(100);
}

    return (
      <>
      { loading && <Loading/>}

        <div className=' text-[3rem] text-center text-white my-10'>
          <h1>{capitalizeFirstLetter(props.category)} - News</h1>
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ loading && <Loading/>}>
            

      <div className=' flex flex-row w-[80%] flex-wrap m-auto space-x-[3rem] mt-[3rem] justify-around'>
      {articles.map((e)=>{
        return <div className=' ml-[3rem]' key={e.url}>
          <NewsItem title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0,85):""} imageUrl = {e.urlToImage?e.urlToImage:"https://iconape.com/wp-content/files/iq/109762/svg/the-daily-news.svg"} newsUrl = {e.url} author={e.author} time = {e.publishedAt} source = {e.source.name}/>
        </div>
      })} 
      </div>
      </InfiniteScroll>
      </>
    )
  }

export default News