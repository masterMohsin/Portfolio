import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import PortfolioSection from './PortfolioSection'
import Experience from './Experience'
import Footer from './Footer'
import Contact from './Contact'
import {Toaster} from 'react-hot-toast'
const Portfolio = () => {
  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <PortfolioSection />
      <Experience />
      <Contact />
      <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default Portfolio
