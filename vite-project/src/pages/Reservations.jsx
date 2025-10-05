import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';

const Reservations = () => {
  return (
    <div className="reservations-page">
      <Header />
      <section className="reservations-hero">
        <div className="container">
          <div className="reservations-content">
            <ReservationForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reservations;