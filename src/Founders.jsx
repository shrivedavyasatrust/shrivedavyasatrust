import React from 'react'
import founders from "./assets/founders/founders.avif";
import './styles/index.css';

const Founders = () => {
  return (
    <section className="founders-section" id="founders">
      <div className="founders-container">
        <header className="founders-header">
          <h2 className="founders-title">Founding Trustees</h2>
        </header>
        <div className="founders-image-wrapper">
          <img loading="lazy" src={founders} alt="Founders of Shri Veda Vyasa Seva Trust, Cherthala" className="founders-img"/>
        </div>
      </div>
    </section>
  )
}

export default Founders