import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
      <>
        <div className=' bg-[#191818] sticky top-0 text-white pl-4 flex flex-row py-2 h-[4.5rem] items-center text-xl justify-between'>
          <div className='space-x-[-0.3rem] md:space-x-3 flex flex-row mt-1 md:mt-0'>
                <img className=' w-[2rem] h-[1rem] md:w-[3rem] md:h-[2rem] -ml-5 md:-ml-0' src="https://iconape.com/wp-content/files/iq/109762/svg/the-daily-news.svg" alt="" />
                <Link to="/"><h1 className=' md:text-3xl text-[0.8rem] -mt-2 md:-mt-0'>{props.WebName}</h1></Link>
          </div >
          <div className=' flex md:mr-5 mr-2 lg:space-x-[3rem] lg:text-lg md:space-x-4 space-x-2 text-[0.5rem] md:text-[0.9rem]'>
                <Link to="/">Home</Link>
                <Link to="/Business">Business</Link>
                <Link to="/Entertainment">Entertainment</Link>
                <Link to="/Health">Health</Link>
                <Link to="/Science">Science</Link>
                <Link to="/Sports">Sports</Link>
                <Link to="/Technology">Technology</Link>
          </div>
        </div>
      </>
    )
  }
export default Navbar