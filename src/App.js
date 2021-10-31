import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Music from './components/Music'
import { Element } from 'react-scroll'

function App() {

  return (
    <>
      <Nav/>
      <Element name="home"><Hero/></Element>
      <Element name="brand"><Brand/></Element>

      <div className="skewed-box">
        <Element name="projects"><Projects/></Element>
        <Element name="music"><Music/></Element>
        <Element name="contact"><Contact/></Element>
      </div>
    </>
  )
}

export default App
