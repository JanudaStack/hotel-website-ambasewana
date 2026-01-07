import React from 'react';
// Imports auto-complete wunoth hodai, nathnam path check karanna wei
import Hero from '../features/landing/Hero';
import About from '../features/landing/About';
import Rooms from '../features/landing/Rooms';
import Events from '../features/landing/Events';
import Gallery from '../features/landing/Gallery';
import Location from '../features/landing/Location';

const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="rooms"><Rooms /></section>
      <section id="events"><Events /></section>
      <section id="gallery"><Gallery /></section>
      <section id="location"><Location /></section>
    </>
  );
};

export default Home;