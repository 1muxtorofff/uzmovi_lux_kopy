import React from 'react'
import notFoundGif from "../../assets/Images/notfound.gif"
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className='text-[#6E879F]'>
        <center>
            <img src={notFoundGif} className='h-[400px] w-[530px] mt-[100px] opacity-60' alt="" />
            <h1 className='mt-[-70px]'>OOPS...</h1>
            <p>page not found</p>
            <Link to='/' >
                <div className='h-[35px] w-[175px] bg-[#222933] pt-[4px] rounded-sm mt-[5px] text-white'>Home</div>
            </Link>
        </center>
    </div>
  )
}
