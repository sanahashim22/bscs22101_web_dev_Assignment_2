import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import WhyUs from './components/whyus';
import Menu from './components/menu';
import ReservationForm from './components/reservation';
import ReservationForm from './components/contactsection';


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <ReservationForm />
      <ContactSection />
    </>
  );
};

export default App;
