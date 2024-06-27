import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa"; 
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useSearchContext } from '../../context/search';
import { useRegesContext } from '../../context/regestr';
import { IoMdExit } from "react-icons/io";
import { motion } from 'framer-motion';
import { SignOut } from '../../firebase';

export default function index() {
  const [innerwidth, setInnerwidth] = useState(window.innerWidth)
  const {value, setValue} = useSearchContext()
  const {reges, setReges} = useRegesContext()
  const [data, setData] = useState([])

  useEffect(()=>{
    setData(reges)
  }, [reges])

  const del = ()=>{
    SignOut()
  }

  const getValue = (event) => {
    setValue(event.target.value)
    console.log(value)
  }

  window.addEventListener('resize', () => {
    setInnerwidth(window.innerWidth)
  })
  
  return (
    <motion.div
    initial={{x:-10000}}
    animate={{x:10}}
    transition={{ ease: "linear", duration: 0.7, x: { duration: 0.5 }}}>
        <div className="mt-[15px] flex gap-2 ml-[180px] login">
        {
            reges? (
            <div className="block">
              <div className="flex p-5 text-center items-center justify-center gap-1  h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]">
                <p className=''>
                  {data  ? data.email: (
                    <h2>Nothing to show</h2>
                  )}
                </p>
              </div>
                <button onClick={del} className={reges != null? "block" : "hidden"}><IoMdExit /></button>
            </div>
            ):(
              
          <div className="flex gap-5">
          <Link to='/login'> <div className="flex text-center items-center justify-center gap-1 w-[66px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]">
            <FaUser className="text-xs" color='#99B1D4'/>
            <p className='text-[#99B1D4] text-[12px]'>Log in</p>
          </div></Link>
          <Link to='/signup'><div className='flex text-center items-center justify-center gap-1 w-[114px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
            <p className='text-[#99B1D4] text-[12px]'>Sign up</p>
          </div>
          </Link>
          </div>
            )
          }
        </div>
        <div className='flex gap-3 mt-[-40px] ml-[300px] sm:ml-[500px] lg:ml-[1150px] info'>
        <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
        <Link to="/favorite_films">
          <FaHeart />
        </Link>
          </div>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaFilm />
          </div>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaEnvelope />
          </div>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaExclamationCircle />
          </div>
        </div>
      <div>
        <center>
        <div className='lg:w-[1165px] relative md:w-[700px] w-[500px]'>
              <input
                  onChange={getValue}
                  type="text"
                  name="search"
                  autoComplete="off"
                  placeholder='Search..'
                  className='lg:w-[1165px]  md:w-[700px] sm:w-[500px] w-[300px] bg-[#222933] h-[40px] mt-[40px] pl-[25px] text-white rounded border border-[#3e444d]'/>
          
          <Link to='/search'>
          <CiSearch color='#313842' size={35} className='lg:left-[1100px] md:left-[660px] md:top-[45px] left-[360px] sm:left-[460px] top-12  absolute'/>
          </Link>
        </div>
        </center>
      </div>
    </motion.div>
  )
}
