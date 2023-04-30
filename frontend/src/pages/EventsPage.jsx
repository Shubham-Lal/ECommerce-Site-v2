import React from 'react';
import Header from '../components/Layout/Header';
import EventCard from '../components/Events/EventCard';
import Footer from '../components/Layout/Footer';

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <div className="bg-white h-[5rem] 800px:h-0" />
      <EventCard active />
      <EventCard active />
      <Footer />
    </div>
  )
}

export default EventsPage