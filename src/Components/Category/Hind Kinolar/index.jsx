import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';
import axios_instance from '../../../Services/Axios/index';
import Spinner from '../../../Page/Spinner';
import { useFavoriteContext } from '../../../context/favorite';
import { MdFavoriteBorder } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


export default function index() {
    const [data, setData] = useState([])
    const {favorite, setFavorite} = useFavoriteContext()
    const [error, setError] = useState(null)

    useEffect(() => {
        axios_instance.get("/movie/now_playing")
          .then(res => setData(res.data.results ))
          .catch(err => console.log(err))
      }, [])

      const {t} = useTranslation("home")

      const result = data.map(info => {
        return (
        <SwiperSlide className='md:w-[240px] w-[130px] h-52 md:h-[260px] lg:h-[380px] transition-all relative'>
            <div className='grid mt-[25px] ml-[185px]'>
                <div className='text-[#A5BBDC] text-[13px] h-80 lg:h-[400px] md:w-[250px] w-[130px] bg-[#222933] pt-[2px] text-center rounded'>
                <Link to={`/bittakino/${info.id}`} state={info}><img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} className='object-cover flex ml-[1.5px] h-[100px] lg:h-[275px] w-full' alt="" /></Link>

                    <h3 className='pt-[15px] md:w-[178px] w-32 md:pl-[20px] line-clamp-1'>{info.original_title}</h3>
                    <div onClick={addFavorite => {
                      // !test
                      let newArr = [...favorite]
                      newArr.push({
                        id: info.id,
                        title: info.original_name,
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
                </div>
            </div>
        </SwiperSlide>
        )
      })

  return (
    <div className='lg:w-[1300px] w-[850px] ml-10 md:ml-[180px] overflow-hidden transition-all'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#22744b] pl-[12px] mt-[50px] text-[17px]'><b>{t("hindk")}</b></h2>
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
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </div>
  )
}