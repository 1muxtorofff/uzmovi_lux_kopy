import React from 'react'

export default function index(image, title) {
  return (
    <div>
        <div className='grid grid-cols-4 mt-[25px] ml-[185px] w-[892px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={image} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>{title}</h3>
            </div>
        </div>
    </div>
  )
}
