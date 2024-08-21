// eslint-disable-next-line no-unused-vars
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
const contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading='Contact' text="Lets have a chat"/>
      <Form/>
      <Footer />

    </div>
  )
}

export default contact;
