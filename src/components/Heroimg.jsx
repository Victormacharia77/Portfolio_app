import "./Heroimgstyles.css"
// eslint-disable-next-line no-unused-vars
import React from 'react'
import heroImg from '../assets/hero_image.jpg'
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return ( <div className="hero">
   
    <div className = 'mask'>
      <img className="into-img" src={heroImg} alt="hero-img" />
    </div>

    <div className="content">
    <p>HI, I'M A FREELANCER</p>
    <h1>React Developer</h1>
    <div>

    <Link to = "/Project" className="btn">
     Projects
    </Link>

    <Link to = "/Contact" className="btn btn-light">
    contact
    </Link>

    </div>

    </div>
        </div>
   
  )
}

export default Heroimg
