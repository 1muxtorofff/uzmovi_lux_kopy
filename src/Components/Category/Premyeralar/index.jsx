import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios_instance from '../../../Services/Axios/index';
import NothingBoxx from "../../nothingBox/index"
import { Link } from 'react-router-dom';
import Spinner from '../../../Page/Spinner';
import {motion } from 'framer-motion'
import { useFavoriteContext } from '../../../context/favorite';
import { MdFavoriteBorder } from "react-icons/md";



export default function index() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {favorite, setFavorite} = useFavoriteContext()

    useEffect(() => {
        axios_instance.get("/movie/top_rated")
          .then(res => setData(res.data.results))
          .catch(err => console.log(err))
      }, [])
      const result = data.map(info => {
        return (
            <SwiperSlide>
               <Link to={`/bittakino/${info.id}`} state={info}><img className='!max-h-[00px] !object-cover md:!w-full !min-h-[500px] !w-[500px]' src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt="" /></Link>
                <h1 className='text-white md:!w-full !w-72 cs-title text-2xl mt-[-75px]'>{info.original_title}</h1>
                <div onClick={addFavorite => {
                      // !test
                      let newArr = [...favorite]
                      newArr.push({
                        id: info.id,
                        title: info.original_title,
                        image: `https://image.tmdb.org/t/p/original${info.backdrop_path}`
                      })
                      setFavorite(newArr)
                    }} 
                        className='absolute mt-[30px] ml-[5px]'>
                          <MdFavoriteBorder/>
                          {
                            // test? <FaHeart onClick={()=>!test}/>:
                          }
                    </div>
            </SwiperSlide>
        )
      })
  return (
    <motion.div
        // animate={{scale:1}}  
        // initial={{scale:0}} 
        transition={{ ease: "linear", duration: 0.7, x: { duration: 1 }}}
        className='h-[800px] bg-[#191f28] mt-[80px]'>
        <div className='pt-[50px]'>
            <h2 className='text-[#A5BBDC] border-l-[3px] border-[#49345d] lg:!ml-[185px] !ml-20 sm:!ml-20 pl-[12px] text-[17px]'><b>PREMYERALAR</b></h2>
        </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper md:!w-[700px] !w-[400px] sm:!w-[500px] md:!ml-20  lg:!w-[1100px] lg:!ml-[180px] mt-[20px]"
        >
            {data.length > 0? result : (
                <div className='flex ml-[100px]'>
                    <Spinner/>
                </div>
            )}
        </Swiper>
    </motion.div>
  )
}