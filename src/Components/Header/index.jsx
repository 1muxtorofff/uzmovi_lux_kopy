import React, { useEffect, useState } from 'react'
import Logo from "../../assets/Images/logo.gif"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRegesContext } from '../../context/regestr'
import { SignOut, getData } from '../../firebase'
import { useLangContext } from '../../context/langContext'
import { useTranslation } from 'react-i18next'

export default function index() {
  const [innerwidth, setInnerwidth] = useState(window.innerWidth)
  const [isopen, setIsopen] = useState(false)
  const {reges, setReges} = useRegesContext()


  const {lng, setLng} = useLangContext()

  const {i18n} = useTranslation("uz" || localStorage.getItem("lang"))
  const ChangeLang = (e) =>{
    setLng(e.target.value)
    localStorage.setItem("lang", e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  const {t} = useTranslation("home")

  window.addEventListener('resize', () => {
    setInnerwidth(window.innerWidth)
  })


  return (
    <header className='w-full sticky top-[0.00005px] z-[49]'>
          <div className='head hidden h-[103px] bg-[#222933] md:block'>
            <motion.div
            initial={{x:-10000}}
            animate={{x:10}}
            transition={{ ease: "linear", duration: 0.7, x: { duration: 0.5 }}}
            >
              
            <Link to="/">
              <img src={Logo} className='Logo ml-[180px] pt-[12px]' alt="" />
            </Link>
            <div className='flex text-[#A5BBDC] mt-[-52px] ml-[580px] text-[14px] nav text-center'>
              <div className='w-[117px] border-b border-[#a85019] h-[62px]'>
                <h1>
                  <Link to="/">{t("bosh_sahifa")}</Link>
                </h1>
              </div>
              <div className='w-[99px] border-b border-[#2a8b58] h-[62px]'>
                <h1>{t("kinolar")}🠻</h1>
              </div>
              <div className='w-[101px] border-b border-[#107b9d] h-[62px]'>
                <h1>{t("janr")}</h1>
              </div>
              <div className='w-[74px] border-b border-[#be1e3a] h-[62px]'>
                <h1>{t("yil")} 🠻</h1>
              </div>
              <div className='w-[100px] border-b border-[#a8843e] h-[62px]'>
                <h1>{t("mamlakat")}🠻</h1>
              </div>
              <div className='w-[153px] border-b border-[#6c4682] h-[62px]'>
                <h1>{t("kino_yangiliklar")} 🠻</h1>
              </div>
              <div className='w-[116px] border-b border-[#a85019] h-[62px]'>
                <h1>{t("saralangan")}</h1>
              </div>
              <select
                className='w-[50px] h-[30px] -mt-2 bg-transparent'
                value={lng} 
                onChange={e => {
                ChangeLang(e)
                setLng(e.target.value)
              }}>
                  <option value="uz">UZ</option>
                  <option value="en">EN</option>
              </select>
            </div>
            </motion.div>
          </div>
          <div className='bg-[#222933] h-[62px] md:hidden' >
            <Link to='/'><img src={Logo} className='logo ml-[20px] pt-[12px] h-[50px] w-[140px]' alt="" /></Link>
            <div onClick={()=>{setIsopen(true)}} className='burger h-[45px] w-[106px] bor bg-[#3B2946] text-[#CEC2D5] text-center pt-[8px] rounded-md border ml-[73%] mt-[-40px] border-[#553f62]'>MENYU ☰<span className='absolute ml-[-5px]'>☰</span></div>
          </div>
      <div className={isopen ? "flex justify-center bg-[#222933] text-white absolute top-0 left-0 z-[19999999px] h-[1000px] w-full" : "hidden"}>
        <div className='flex flex-col'>
          <div className='flex'>
            <Link to="/">
              <img src={Logo} className='' alt="" />
            </Link>
            <button className='' onClick={()=>{setIsopen(false)}}>helo</button>
          </div>
            <div className='flex flex-col text-[#A5BBDC] mt-[52px] text-[14px] n text-center'>
              <div className='w-[117px] border-b border-[#a85019] h-[62px]'>
                <h1>
                  <Link to="/">{t("bosh_sahifa")}</Link>
                </h1>
              </div>
              <div className='w-[99px] border-b border-[#2a8b58] h-[62px]'>
                <h1>{t("kinolar")}🠻</h1>
              </div>
              <div className='w-[101px] border-b border-[#107b9d] h-[62px]'>
                <h1>{t("janr")}</h1>
              </div>
              <div className='w-[74px] border-b border-[#be1e3a] h-[62px]'>
                <h1>{t("yil")} 🠻</h1>
              </div>
              <div className='w-[100px] border-b border-[#a8843e] h-[62px]'>
                <h1>{t("mamlakat")}🠻</h1>
              </div>
              <div className='w-[153px] border-b border-[#6c4682] h-[62px]'>
                <h1>{t("kino_yangiliklar")} 🠻</h1>
              </div>
              <div className='w-[116px] border-b border-[#a85019] h-[62px]'>
                <h1>{t("saralangan")}</h1>
              </div>
              <select
                className='w-[50px] h-[30px] -mt-2 bg-transparent'
                value={lng} 
                onChange={e => {
                ChangeLang(e)
                setLng(e.target.value)
              }}>
                  <option value="uz">UZ</option>
                  <option value="en">EN</option>
              </select>
            </div>
        </div>

      </div>
    </header>
  )
}
