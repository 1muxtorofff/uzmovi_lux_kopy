import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../Header/index"
import Footer from "../Footer/index"

export default function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
