import React from 'react';
import Header from '../components/About/Header';
import History from '../components/About/History';
import Values from '../components/About/Values';
import Team from '../components/About/Team';

const About = () => {
  return (
    <div className="py-20">
      <Header />
      <History />
      <Values />
      <Team />
    </div>
  );
};

export default About;
