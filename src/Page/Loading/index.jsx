import React from 'react'
import {PacmanLoader} from "react-spinners"

export default function Loading() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <PacmanLoader className='mt-[350px]' size={30} color='#36d7b7'/>
    </div>
  )
}
