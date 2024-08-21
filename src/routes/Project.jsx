// eslint-disable-next-line no-unused-vars
import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my recent works"/>
      <Work />
      <PricingCard />
      <Footer />
      
    </div>
  )
}

export default project;
