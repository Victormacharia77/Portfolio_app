//create a functional component 
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'

import Heroimg from '../components/Heroimg'
const home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
    </div>
  )
}

export default home
