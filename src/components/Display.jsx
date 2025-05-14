import React from 'react'
import Navbar from './Navbar'
import "../index.css"
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Commitment from './Commitment'
import Testimonials from './Testimonials'
import Prices from './Prices'
import Location from './Location'
import Contact from './Contact'

const Display = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Commitment/>
      <Testimonials/>
      <Prices />
      <Location/>
      <Contact/>
    </>
  )
}

export default Display
