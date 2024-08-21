import "./AboutContentStyles.css";

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.jfif';
import React2 from '../assets/react2.jfif';


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>Im a React front-end developer. I create responsive and secure websites for my clients.</p>
        <Link to='/Contact'>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="React Project 1" />
          </div>
          
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="React Project 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
