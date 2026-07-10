import {useEffect, useState} from 'react'
import './styles/index.css';
import { IoCloseOutline, IoImagesOutline } from "react-icons/io5";
import events from './assets/event_data.json';
import upcomingEvent from './assets/event-images/upcoming_event.avif';
import event0_thumbnail from './assets/event-images/event0_thumbnail.avif';
import event0_1 from './assets/event-images/event0_1.avif';
import event0_2 from './assets/event-images/event0_2.avif';
import event1_thumbnail from './assets/event-images/event1_thumbnail.webp';
import event1_1 from './assets/event-images/event1_1.avif';
import event1_2 from './assets/event-images/event1_2.avif';
import event2_thumbnail from './assets/event-images/event2_thumbnail.avif';
import event2_1 from './assets/event-images/event2_1.avif';
import event3_thumbnail from './assets/event-images/event3_thumbnail.avif';
import event3_1 from './assets/event-images/event3_1.avif';
import event3_2 from './assets/event-images/event3_2.avif';

const imageMap = {
  "./upcoming_event.avif": upcomingEvent,
  "./event0_thumbnail.avif": event0_thumbnail,
  "./event0_1.avif": event0_1,
  "./event0_2.avif": event0_2,
  "./event1_thumbnail.webp": event1_thumbnail,
  "./event1_1.avif": event1_1,
  "./event1_2.avif": event1_2,
  "./event2_thumbnail.avif": event2_thumbnail,
  "./event2_1.avif": event2_1,
  "./event3_thumbnail.avif": event3_thumbnail,
  "./event3_1.avif": event3_1,
  "./event3_2.avif": event3_2,
};

const Events = () => {

  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
     <section className="events-section" id="events">
      <div className="events-container">
        
        <header className="events-header">
          <h2 className="events-title">Events</h2>
        </header>

        <div className="events-grid">
          {events.map((event, index) => (
            <article className="event-card" key={index}>
              <div className="event-card-img-wrapper">
                <img loading="lazy" src={imageMap[event.thumbnail_img]} alt={`${event.title} thumbnail`} className="event-img"/>
              </div>
              <div className="event-card-content">
                <header className="event-card-header">
                  <span className="event-card-meta">{event.date} • {event.term}</span>
                  <h3 className="event-card-title">{event.title}</h3>
                </header>
                <p className="event-card-desc">{event.description}</p>
                <footer className="event-card-footer">
                  <button className="btn-secondary" onClick={() => openModal(event)}>
                    <IoImagesOutline size={18} /> View Gallery
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </div>

      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedEvent.title}</h3>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                <IoCloseOutline size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-gallery">
                {selectedEvent.images?.map((imgPath, index) => (
                  <img loading="lazy" key={index} src={imageMap[imgPath]} alt={`${selectedEvent.title} image ${index + 1}`} className="modal-gallery-img"/>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a target="_blank" rel="noopener noreferrer" href={selectedEvent.galleryLink} className="btn-primary">
                More Photos
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;