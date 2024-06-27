  import React, { useEffect, useState } from 'react'
  import { FaHeart, FaUser } from "react-icons/fa";
  import { FaFilm } from "react-icons/fa6";
  import { FaEnvelope } from "react-icons/fa";
  import { FaExclamationCircle } from "react-icons/fa";
  import { FaAngleDoubleDown } from "react-icons/fa";
  import axios_instance from '../../Services/Axios';
  import { Link } from 'react-router-dom';
  import {useSearchContext} from "../../context/search"
  import {useFilterContext} from "../../context/filter"
import { useSelectValueContext } from '../../context/category';
import {motion} from 'framer-motion'
import Spinner from '../Spinner';
import NothingBox from '../../Components/nothingBox';

  export default function Serach() {
    const {value, setValue} = useSearchContext()
    const {filter, setFilter} = useFilterContext()
    const [movies, setMovies] = useState([]);
    const [langValue, setLangvalue] = useState()
    const [yearValue, setYearvalue] = useState()
    const {selectValue, setSelectValue} = useSelectValueContext()
    console.log(filter)
  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios_instance.get(`https://api.themoviedb.org/3/search/movie?query=${value}&adult=${filter.adult}&language=${filter.language}&primary_release_year=${filter.year}`);
              setMovies(res.data.results);
              console.log(res.data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [filter]);

  const handleInputChange = (event) => {
    setValue(event.target.value)
      const { name, value} = event.target;
      const inputValue = value;
      setFilter(prevFilter => ({
          ...prevFilter,
          [name]: inputValue
      }));
  };
  const handleFilterChange = (event) => {
    setLangvalue(event.target.value)
    const {value} = event.target;
    const selectValue = value;
      setFilter(prevFilter => ({
          ...prevFilter,
          language: selectValue
      }));
  };
  const handleFilterYear = (event) => {
    setYearvalue(event.target.value)
    const {value} = event.target;
    const selectValue = value;
      setFilter(prevFilter => ({
          ...prevFilter,
        year: selectValue
      }));
  };
  const getValue = (value)=>{
    setSelectValue(value.target.value)
  }



    const [innerwidth, setInnerwidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
      setInnerwidth(window.innerWidth)
    })

    
    return (
      <div>
        <motion.div
          initial={{x:-1000}}
          animate={{x:10}}
          transition={{ ease: "linear", duration: 0.7, x: { duration: 0.5 }}}
        >
        <div className='mt-[15px] flex gap-2 ml-[180px] login'>
            <div className='flex text-center items-center justify-center gap-1 w-[66px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
              <FaUser className='text-xs' color='#99B1D4'/>
              <p className='text-[#99B1D4] text-[12px]'>Kirish</p>
            </div>
            <div className='flex text-center items-center justify-center gap-1 w-[114px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
              <p className='text-[#99B1D4] text-[12px]'>Ro'yxatdan o'tish</p>
            </div>
          </div>  
          
        {innerwidth > 1028 ? (
          <>
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

          </>
        ) : (
          <div className='w-full'>
            <div className='text-[18px] flex items-center justify-center w-[48px] h-[39.6px] bg-[#222933] border border-[#313842] text-[#99B1D4] rounded ml-[79%] mt-[-40px]'>
              <FaAngleDoubleDown />
            </div>
          </div>
        )}
        <div>
          <center>
            <input
                  type="text"
                  name="search"
                  value={value}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder='Search..'
              className='lg:w-[1165px] md:w-[700px] w-[500px] bg-[#222933] h-[40px] mt-[40px] pl-[25px] text-white rounded border border-[#3e444d]'/>
            
            
          </center>
          <div className='flex justify-center items-center mt-5 gap-10'>
          <select className='w-[70px] h-8 bg-[#222933]' value={langValue} onChange={handleFilterChange}>
            <option>en-US</option>
            <option>ru-ru</option>
            <option>ja-ja</option>
          </select>
          <input 
                className='h-8 p-2 bg-[#222933] text-white'
                type="number"
                onChange={handleFilterYear}
                value={yearValue}
                 name="" 
                 id=""
                 placeholder='Year' />
          <Link to="/category">
              <select className='w-64 h-8 text-xl bg-[#222933]' value={selectValue} onChange={getValue}>
                  <option>popularity.asc</option>
              </select>
          </Link>
          </div>
        </div>

          <div className="text-white flex flex-wrap items-center text-center pt-[10px] justify-center w-[1170px] ml-[179px] gap-10 mt-20">
                  {movies.length >= 1 ? movies.map(movie => (
                      <div key={movie.id} className='w-[350px]'>
                          <img className="w-96 h-96 object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                          <li className='list-none'>{movie.title}</li>
                      </div>
                  )):
                  movies.length == 0 ? (
                    <div>
                      <NothingBox/>
                    </div>
                    
                  ):(
                    (
                      <div className='flex justify-center items-center -ml-[350px]'>
                        <Spinner/>
                      </div> 
                    )  
                  )
                  }
          </div>
          <center>
                  <Link to='/' >
                      <div className=' h-[35px] w-[175px] bg-[#222933] pt-[4px] rounded-sm mt-[50px] text-white'>Home</div>
                  </Link>
          </center>
        </motion.div>
        <div>
        </div>
      </div>
    )
  }
