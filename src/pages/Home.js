import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Clients from '../components/Clients'
import Features from '../components/Features'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Clients/>
        <Features/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home