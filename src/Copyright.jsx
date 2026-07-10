import React from 'react'
import './styles/index.css';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="copyright-text">
          &copy; {currentYear} SVVST. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Copyright