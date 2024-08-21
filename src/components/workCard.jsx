import "./WorkCardStyles.css";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project" />
      <h2 className="project-title">{props.title}</h2>

      <div className="pro-details">
        <p>{props.desc}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
WorkCard.propTypes = {
  imgsrc: PropTypes.string.isRequired,  // imgsrc should be a string and required
  title: PropTypes.string.isRequired,   // title should be a string and required
  desc: PropTypes.string.isRequired,    // text should be a string and required
  view: PropTypes.string.isRequired,    // view should be a string and required (URL)
};

export default WorkCard;
