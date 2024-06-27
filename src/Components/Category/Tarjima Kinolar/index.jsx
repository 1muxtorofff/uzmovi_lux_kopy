import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import axios_instance from '../../../Services/Axios/index';
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion'
import Spinner from '../../../Page/Spinner';
import { useFavoriteContext } from '../../../context/favorite';
import { MdFavoriteBorder } from 'react-icons/md';
import { addData } from '../../../firebase';
import { useRegesContext } from '../../../context/regestr';
import { useTranslation } from 'react-i18next';

export default function index() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const {favorite, setFavorite} = useFavoriteContext()
    const {reges, setReges} = useRegesContext()
    const [like, setLike] = useState([])

    useEffect(() => {
        axios_instance.get("/movie/popular")
          .then(res => {
            setLike(new Array(false).fill(res.data.results.length))
            setData(res.data.results)
          })
          .catch(err => console.log(err))
      }, [])

      const addFavorite = (info) => {
        if(!reges) return
        let newArr = [...favorite]
        newArr.push({
          id: info.id,
          // title: info.original_name,
          image: `https://image.tmdb.org/t/p/original${info.backdrop_path}`,
        })
        setFavorite(newArr)
        addData(reges.uid, newArr[newArr.length-1])
        //   id: 21432423423,
        //   title: "name",
        //   image: `source`
        // })
        
          .then(res => console.log(res))
          .catch(err => console.log(err))
          // .finally(() => console.log("working"))
      }

      const {t} = useTranslation()      
      const result = data.map(info => {
        let like = false
        return (
        <SwiperSlide className='md:w-[240px] w-[130px] h-52 md:h-[260px] lg:h-[380px] transition-all relative'>
            <div className='grid mt-[25px] ml-[185px]'>
                <div className='text-[#A5BBDC] text-[13px] h-80 lg:h-[400px] md:w-[250px] w-[130px] bg-[#222933] pt-[2px] text-center rounded'>
                <Link to={`/bittakino/${info.id}`} state={info}><img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} className='object-cover flex ml-[1.5px] h-[100px] lg:h-[275px] w-full' alt="" /></Link>
                    <h3 className='pt-[15px] md:w-[178px] w-32 md:pl-[20px] line-clamp-1'>{info.original_title}</h3>
                    <div onClick={() => {
                      addFavorite(info)
                      like = !like
                    }} 
                    className='absolute mt-[30px] ml-[5px]'>
                          {/* <MdFavoriteBorder stroke='red' fill='red'/> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"20px"} viewBox="0 0 24 24" fill={like ? "red" :"none"} stroke={like ? "red" :"#fff"}><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        )
      })

  return (
    <div
      className='lg:w-[1300px] w-[850px] ml-10 md:ml-[180px] overflow-hidden transition-all'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#3848b0] pl-[12px] mt-[50px] text-[17px]'><b>{t("tarjimak")}</b></h2>
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode]}
        className="ml-[-184px] mySwiper w-[700px] md:w-full"
      >
        {data.length > 0? result : (
          <div className='flex justify-center items-center -ml-[100px]'>
              <Spinner/>
          </div>
        )}
      </Swiper>
    </div>
  )
}