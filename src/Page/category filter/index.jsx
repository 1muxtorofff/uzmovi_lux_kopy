import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import axios_instance from '../../Services/Axios';
import { Link } from 'react-router-dom';
// import {useSearchContext} from "../../context/search"
import {useFilterContext} from "../../context/filter"
import { useSelectValueContext } from '../../context/category';

export default function Category() {
  const {filter, setFilter} = useFilterContext()
  const [movies, setMovies] = useState([]);
  const {selectValue, setSelectValue} = useSelectValueContext();
  const [innerwidth, setInnerwidth] = useState(window.innerWidth)
  console.log(filter)
useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios_instance.get(`https://api.themoviedb.org/3/discover/movie?query=&sort_by=${filter.category}`);
            setMovies(res.data.results);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, [filter]);

const handleFilterChange = (event) => {
  setSelectValue(event.target.value)
  const {value} = event.target;
  const inputValue = value;
    setFilter(prevFilter => ({
        ...prevFilter,
        category: inputValue
    }));
};
  


  return (
    <div>
        <div className='mt-[15px] flex gap-2 ml-[180px] login'>
          <Link to="/login">
            <div className='flex text-center items-center justify-center gap-1 w-[66px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
              <FaUser className='text-xs' color='#99B1D4'/>
              <p className='text-[#99B1D4] text-[12px]'>Login</p>
            </div>
          </Link>
          <Link to="/signup">
            <div className='flex text-center items-center justify-center gap-1 w-[114px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
              <p className='text-[#99B1D4] text-[12px]'>Sign up</p>
            </div>
          </Link>
        </div>  
        
      {innerwidth > 1028 ? (
        <>
        <div className='flex gap-3 mt-[-40px] ml-[1200px] info'>
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
        <div className=' flex justify-center items-center'>

          <select className='w-64 h-8 text-xl bg-[#222933] select' value={filter.category} onChange={handleFilterChange}>
              <option>popularity.asc</option>
              <option>popularity.desc</option>
              <option>orginal_title</option>
              <option>title.asc</option>
              <option>title.desc</option>
              <option>primary_release_date.asc</option>
              <option>primary_release_date.desc</option>
              <option>vote_average.asc</option>
              <option>vote_count.asc</option>
          </select>
        </div>

        <div className="text-white flex flex-wrap lg:items-center text-center pt-[10px] transition-all lg:justify-center w-[1170px] lg:ml-[179px] ml-20 gap-10 mt-20">
                {movies.map(movie => (
                    <div key={movie.id} className='lg:w-[200px] lg:h-[400px] h-[300px] w-[180px]'>
                        <img className="w-full h-[200px] lg:h-[300px] lg:object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                        <li className='list-none'>{movie.title}</li>
                    </div>
                ))}
        </div>
        <center>
                <Link to='/' >
                    <div className=' h-[35px] w-[175px] bg-[#222933] pt-[4px] rounded-sm mt-[50px] text-white'>Home</div>
                </Link>
        </center>
      </div>
      <div>
      </div>
    </div>
  )
}
