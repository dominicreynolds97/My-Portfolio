import React from 'react'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Music from './components/Music'

function App() {

  return (
    <>
      <Hero/>
      <Brand/>

      <div className="skewed-box">
        <Projects/>
        <Music/>
        <Contact/>
      </div>
    </>
  )
}

export default App
