import React from 'react'
import Header from './components/Header'
import Hero from "./components/Hero"
import About from './components/About'
import Projects from './components/Projects'
import Contactme from './components/Contactme'
import Lenis from "@studio-freight/lenis";
import  { useEffect } from "react";
import ParticlesBackground from './components/ParticlesBackground'

const App = () => {

  return (
    <>
      <Header />
      <main>

        <ParticlesBackground/>
        <section id='home'>
          <Hero/>
        </section>
        
        <section id='about'>
          <About/>
        </section>

        <section id='projects'>
          <Projects/>
        </section>

        <section id='contactme'>
          <Contactme/>
        </section>

      </main>
    </>
  )
}

export default App
