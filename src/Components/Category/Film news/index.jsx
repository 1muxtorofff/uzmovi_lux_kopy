import React from 'react'
import Cino1 from "../../../assets/Images/cino1.jpg"
import Cino2 from "../../../assets/Images/cino2.jpg"
import Cino3 from "../../../assets/Images/cino3.jpg"
import Cino4 from "../../../assets/Images/cino4.jpg"

export default function index() {
  return (
    <div>
        <div className='pt-[50px]'>
            <h2 className='text-[#A5BBDC] border-l-[3px] border-[#cd5b12] ml-[185px] pl-[12px] text-[17px]'><b>KINO YANGILIKLARI</b></h2>
            <div className='text-xs text-[#A5BBDC] grid h-[320px] w-[426px] mt-[20px] ml-[185px]'>
                <div className='flex items-center bg-[#1D232C] h-[70px] w-[426px] rounded-md'>
                    <img className='w-[110px] h-[70px] border-4 rounded-l-md border-[#1f2935]' src={Cino1} alt="" />
                    <p className='pl-[15px]'>8 mil Sakkiz Mile Uzbek o'zbek tilida Premyera</p>
                    <div className='bg-[#232F3DCC] text-center justify-center rounded-r-md absolute ml-[390px] pt-[14px] w-[35px] h-[70px]'>
                        <h1 className='text-3xl'>→</h1>
                    </div>
                </div>
                <div className='flex items-center bg-[#1D232C] h-[70px] w-[426px] rounded-md'>
                    <img className='w-[110px] h-[70px] border-4 rounded-l-md border-[#1f2935]' src={Cino2} alt="" />
                    <p className='pl-[15px]'>Yamakasi 1 yangi samuraylar premyera</p>
                    <div className='bg-[#232F3DCC] text-center justify-center rounded-r-md absolute ml-[390px] pt-[14px] w-[35px] h-[70px]'>
                        <h1 className='text-3xl'>→</h1>
                    </div>
                </div>
                <div className='flex items-center bg-[#1D232C] h-[70px] w-[426px] rounded-md'>
                    <img className='w-[110px] h-[70px] border-4 rounded-l-md border-[#1f2935]' src={Cino3} alt="" />
                    <p className='pl-[15px]'>Tetris premyera uzbek o'zbek tilida</p>
                    <div className='bg-[#232F3DCC] text-center justify-center rounded-r-md absolute ml-[390px] pt-[14px] w-[35px] h-[70px]'>
                        <h1 className='text-3xl'>→</h1>
                    </div>
                </div>
                <div className='flex items-center bg-[#1D232C] h-[70px] w-[426px] rounded-md'>
                    <img className='w-[110px] h-[70px] border-4 rounded-l-md border-[#1f2935]' src={Cino4} alt="" />
                    <p className='pl-[15px]'>Shahzoda hind kino premyera</p>
                    <div className='bg-[#232F3DCC] text-center justify-center rounded-r-md absolute ml-[390px] pt-[14px] w-[35px] h-[70px]'>
                        <h1 className='text-3xl'>→</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
