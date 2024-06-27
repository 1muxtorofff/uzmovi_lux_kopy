import React from 'react'
import {SyncLoader} from "react-spinners"
export default function Spinner() {
  return (
    <div className='smallspinners !h-96 !w-96 m-10 lg:!ml-400 lg:!pl-96 !mt-36 !-ml-5'>
        <SyncLoader color='#36d7b7' className='' size={15}/>
    </div>
  )
}
