import React from 'react'
import nothingBox from "../../assets/Images/nothingBox.jpg"

export default function NothingBox() {
  return (
    <div>
        <center>
            <img src={nothingBox} className='mt-[100px] h-[300px]' alt="" />
            <h1 className='text-white text-4xl'>There's nothing</h1>
        </center>
    </div>
  )
}
