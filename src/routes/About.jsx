// eslint-disable-next-line no-unused-vars
import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimg from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';

const about = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading='ABOUT' text= 'Im a friendly front-end developer '/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about;
