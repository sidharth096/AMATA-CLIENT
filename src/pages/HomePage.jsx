import React from 'react'
import { Header } from '../components/Header'
import Banner from '../components/Banner'
import Discover from '../components/Discover'
import About from '../components/About'
import WhoWeare from '../components/WhoWeare'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Discover/>
    <About/>
    <WhoWeare/>
    </>
  )
}

export default HomePage