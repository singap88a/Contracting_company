import React from 'react';
import Hero from '../../components/Home/Hero';
import Brands from '../../components/Home/Brands';
import AboutBrief from '../../components/Home/AboutBrief';
import Statistics from '../../components/Home/Statistics';
import HomeProjects from '../../components/Home/HomeProjects';
import ServicesHighlights from '../../components/Home/ServicesHighlights';
import FAQ from '../../components/Home/FAQ';
import CTA from '../../components/Home/CTA';

const Home = () => {  
  return (
    <>
    <>
      <Hero />
      <AboutBrief />
      <ServicesHighlights />
      <Statistics />
      <HomeProjects />
      <Brands />
      <FAQ />
      <CTA />
    </>
    </>
  );
};

export default Home;
