import "./NavbarStyles.css"

// eslint-disable-next-line no-unused-vars
import React ,{useState} from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick = () =>setClick(!click)
  return (
    <div className="header">
      <Link to="/" >
      <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/project" >Project</Link>
        </li>
        <li>
            <Link to="/about" >About</Link>
        </li>
        <li>
            <Link to="/contact" >Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? ( <a>
        <i className="fa-solid fa-xmark"></i>
      </a>) : (<a>
        <i className="fa-solid fa-bars"></i>
      </a> )}
      </div>
    </div>
  )
}


export default Navbar
