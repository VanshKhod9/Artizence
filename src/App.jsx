import React from 'react';
import './App.css'
import Hero from './component/header+hero.section/hero.jsx';
import About from './component/about/about.jsx';
import Service from './component/service/service.jsx';
import Feature from './component/feature/feature.jsx';
import FAQ from './component/FAQ+consultation/Faq.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <>
    <Hero/>
    <About/>
    <Service/>
    <Feature/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
