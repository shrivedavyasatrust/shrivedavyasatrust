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
import event4_thumbnail from './assets/event-images/event4_thumbnail.avif';
import event4_1 from './assets/event-images/event4_1.avif';
import event4_2 from './assets/event-images/event4_2.avif';
import event4_3 from './assets/event-images/event4_3.avif';
import event5_thumbnail from './assets/event-images/event5_thumbnail.avif';
import event5_1 from './assets/event-images/event5_1.avif';
import event5_2 from './assets/event-images/event5_2.avif';
import event6_thumbnail from './assets/event-images/event6_thumbnail.avif';
import event6_1 from './assets/event-images/event6_1.avif';
import event6_2 from './assets/event-images/event6_2.avif';
import event7_thumbnail from './assets/event-images/event7_thumbnail.avif';
import event7_1 from './assets/event-images/event7_1.avif';
import event7_2 from './assets/event-images/event7_2.avif';
import event7_3 from './assets/event-images/event7_3.avif';
import event8_thumbnail from './assets/event-images/event8_thumbnail.avif';
import event8_1 from './assets/event-images/event8_1.avif';
import event8_2 from './assets/event-images/event8_2.avif';
import event8_3 from './assets/event-images/event8_3.avif';
import event9_thumbnail from './assets/event-images/event9_thumbnail.avif';
import event9_1 from './assets/event-images/event9_1.avif';
import event9_2 from './assets/event-images/event9_2.avif';
import event9_3 from './assets/event-images/event9_3.avif';
import event10_thumbnail from './assets/event-images/event10_thumbnail.avif';
import event10_1 from './assets/event-images/event10_1.avif';
import event10_2 from './assets/event-images/event10_2.avif';
import event10_3 from './assets/event-images/event10_3.avif';

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
  "./event4_thumbnail.avif": event4_thumbnail,
  "./event4_1.avif": event4_1,
  "./event4_2.avif": event4_2,
  "./event4_3.avif": event4_3,
  "./event5_thumbnail.avif": event5_thumbnail,
  "./event5_1.avif": event5_1,
  "./event5_2.avif": event5_2,
  "./event6_thumbnail.avif": event6_thumbnail,
  "./event6_1.avif": event6_1,
  "./event6_2.avif": event6_2,
  "./event7_thumbnail.avif": event7_thumbnail,
  "./event7_1.avif": event7_1,
  "./event7_2.avif": event7_2,
  "./event7_3.avif": event7_3,
  "./event8_thumbnail.avif": event8_thumbnail,
  "./event8_1.avif": event8_1,
  "./event8_2.avif": event8_2,
  "./event8_3.avif": event8_3,
  "./event9_thumbnail.avif": event9_thumbnail,
  "./event9_1.avif": event9_1,
  "./event9_2.avif": event9_2,
  "./event9_3.avif": event9_3,
  "./event10_thumbnail.avif": event10_thumbnail,
  "./event10_1.avif": event10_1,
  "./event10_2.avif": event10_2,
  "./event10_3.avif": event10_3
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
                  <span className="event-card-meta">{event.date} • {event.time}</span>
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
              <div className="modal-gallery" style={{ columns: Math.min(selectedEvent.images?.length || 1, 3) }}>
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