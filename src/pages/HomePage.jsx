import React from 'react'
import { Header } from '../components/Header'
import Banner from '../components/Banner'
import Discover from '../components/Discover'
import About from '../components/About'
import WhoWeare from '../components/WhoWeare'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Discover/>
    <About/>
    <WhoWeare/>
    <Footer/>
    </>
  )
}

export default HomePage