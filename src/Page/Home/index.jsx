import React, { useEffect } from 'react'
import Info from "../../Components/Info/index"
import TarjimaKinolar from "../../Components/Category/Tarjima Kinolar/index"
import HindKinolar from "../../Components/Category/Hind Kinolar/index"
import Seriallar from "../../Components/Category/Seriallar/index"
import Premyeralar from "../../Components/Category/Premyeralar/index"
import FilmNews from "../../Components/Category/Film news/index"

export default function index() {

  return (
    <>
      <Info />
      <Premyeralar />
      <TarjimaKinolar />
      <HindKinolar />
      <Seriallar />
      {/* <FilmNews /> */}
    </>
  )
}
