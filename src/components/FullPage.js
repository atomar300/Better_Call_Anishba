import React from 'react'
import Home from './home/Home'
import Services from './services/Services'
import About from './about/About'
import Contact from './contact/Contact'

const FullPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default FullPage