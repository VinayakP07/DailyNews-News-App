/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import loading from './loading.gif'

const Loading = () => {
    return (
    <>
    <div className=' mx-[49.5%] my-10 w-10 h-10'>
        <img src={loading} alt="" />
    </div>
    </>
    )
  }

export default Loading