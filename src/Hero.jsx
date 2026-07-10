import React, { useEffect, useState } from 'react';
import './styles/index.css';
import logo from "./assets/logo_saffron.png";
import bg1 from "./assets/hero_bg_1.avif";
import bg2 from "./assets/hero_bg_2.avif";
import bg3 from "./assets/hero_bg_3.avif";

const backgrounds = [
  bg1, bg2, bg3
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000); // Change hero section image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Apply 'active' style to display the background */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}


          <div className="hero-overlay">
            <header className="hero-header">
              <div className="hero-logo-lockup">
                <img src={logo} alt="SVVST Logo" className="hero-logo-img" />
                <span className="hero-trust-name">Shri Veda Vyasa Seva Trust</span>
              </div>
            </header>
            <main className="hero-main">
              <div className="hero-title-wrapper">
                <h1 className="hero-title"><span className="accent-word">Building</span> a Better Tomorrow!</h1>
              </div>
              <nav className="hero-nav">
                <a href="#mission-vision-values" className="hero-nav-item">
                  <span>Ethos</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-arrow"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="#events" className="hero-nav-item">
                  <span>Events</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-arrow"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="#founders" className="hero-nav-item">
                  <span>Founders</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-arrow"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="#contact-us" className="hero-nav-item">
                  <span>Contact</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-arrow"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </nav>
            </main>
          </div>

    </div>
  );
};

export default Hero;