import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Experience, Projects, Contact } from './components';
import './Website.css';

const Website = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className='xl:bg-hero-pattern bg-hero-pattern-sm bg-cover bg-no-repeat sm:bg-right-top bg-right'>
          <Navbar />
          <div className='hero-overlay'>
            <Hero />
          </div>
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default Website;

// TO DO
// Change tech balls to coins
// Add animation next to contact section
