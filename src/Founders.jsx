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
        <figure className="founders-figure">
          <div className="founders-image-wrapper">
            <img loading="lazy" src={founders} alt="Founders of Shri Veda Vyasa Seva Trust, Cherthala" className="founders-img"/>
          </div>
          <figcaption className="founders-caption">Founders of SVVST - Anandakumar T, Anirudh Krishna Kamath, Dr. Jayachandra Kamath G, Haridas Vadhyar G, Harish Krishnan, K G Prakash Bhat, Latha Devi V, Naveena Kumar S, Navinakaran V R, Santhakumar M</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Founders