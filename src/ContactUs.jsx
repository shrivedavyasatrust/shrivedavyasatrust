import React from 'react'
import './styles/index.css';
import president from './assets/founders/AnandakumarT.avif';
import secretary from './assets/founders/DrJayachandraKamath.avif';
import { FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact-us">
      <div className="contact-container">
        
        <header className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">Get in touch with our managing committee.</p>
        </header>

        <div className="contact-grid">
          
          <article className="contact-profile">
            <div className="contact-avatar">
              <img loading="lazy" src={president} alt="Anand Kumar, President" />
            </div>
            <div className="contact-info">
              <h3 className="contact-name">Anandakumar T</h3>
              <p className="contact-role">President</p>
              <a className="contact-link" href="tel:+919446482768">
                <FaPhone className="contact-icon"/>
                <span>+91 9446482768</span>
              </a>
            </div>
          </article>

          <article className="contact-profile">
            <div className="contact-avatar">
              <img loading="lazy" src={secretary} alt="Dr. Jayachandra Kamath, Secretary" />
            </div>
            <div className="contact-info">
              <h3 className="contact-name">Dr. Jayachandra Kamath</h3>
              <p className="contact-role">Secretary</p>
              <a className="contact-link" href="tel:+919447484009">
                <FaPhone className="contact-icon"/>
                <span>+91 9447484009</span>
              </a>
            </div>
          </article>
          
          <div className="contact-address-card">
            <h3 className="contact-name">Registered Address</h3>
            <address className="contact-address">
              Cherthala Municipality, Ward No. 29<br/>
              Cherthala North Village, Cherthala Taluk<br/>
              Alappuzha - 688524<br/>
              Kerala, India
            </address>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs