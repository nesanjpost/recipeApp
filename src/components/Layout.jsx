// import React from 'react'
import BackToTop from './BackToTop'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <BackToTop />
    </>
  )
}

export default Layout