import React from 'react'
import { useFavoriteContext } from "../../context/favorite"
import { GrTrash } from "react-icons/gr";
import NothingBox from '../../Components/nothingBox';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import { motion  } from 'framer-motion'


export default function index() {
  const {favorite, setFavorite} = useFavoriteContext()
  const deleteItem = (id) => {
    const updatedCart = favorite.filter(item => item.id !== id);
    setFavorite(updatedCart);
  }

  

  return (
    <motion.div
    initial={{x:-1000}}
    animate={{x:10}}
    transition={{ ease: "linear", duration: 0.7, x: { duration: 0.5 }}}
     className='flex flex-wrap gap-10 justify-center items-center mt-20'>
        {favorite.length == 0? (
          <div className='justify-center items-center flex'>
            <NothingBox/>
          </div>
        ) : 
        (favorite.length >=1 ?
          favorite.map((item) => {
            console.log(item)
            return(
              <div key={item.id} className='bg-[#313842] rounded w-[300px]  mb-5'>
                <Link to={`/bittakino/${item.id}`} state={item}><img className='h-[200px] w-full' src={item.image} alt="" /></Link>
                <h1 className='text-white text-xl line-clamp-1  pt-10 '>{item.title}</h1>
                <GrTrash className='mt-20 ml-2 mb-10' color='white' onClick={() => deleteItem(item.id)}/>
              </div>
            )
          })
        : <div>
          <Spinner/>  
        </div> )
}
        {/* {} */}
    </motion.div>
  )
}
