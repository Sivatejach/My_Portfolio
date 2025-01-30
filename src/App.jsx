import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

 const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
      </div>
    </>
  )
}

export default App ;