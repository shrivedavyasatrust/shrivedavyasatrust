import "./styles/index.css";

const MissionVisionValues = () => {
  return (
    <section className="ethos-section" id="mission-vision-values">
      <div className="ethos-container">
        
        <div className="ethos-manifesto">
          <h2 className="ethos-title">
            The <span className="highlight">Ethos</span>
          </h2>
          <p className="ethos-intro">
            Driven by compassion. Grounded in service. A commitment to holistic community upliftment.
          </p>
        </div>

        <div className="ethos-details">
          <div className="ethos-block">
            <span className="ethos-label">Our Mission</span>
            <p className="ethos-text">
              To serve society through quality education, skill development, financial assistance, healthcare, moral and spiritual growth, child welfare, elderly care, and disaster relief.
            </p>
          </div>
          
          <div className="ethos-block">
            <span className="ethos-label">Our Vision</span>
            <p className="ethos-text">
              To build an empowered, compassionate, and self-reliant community where every person has access to education, livelihood, healthcare, and dignified living.
            </p>
          </div>

          <div className="ethos-block">
            <span className="ethos-label">Core Values</span>
            <ul className="ethos-values-list">
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Equity</li>
              <li>Empowerment</li>
              <li>Service</li>
              <li>Sustainability</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionVisionValues;