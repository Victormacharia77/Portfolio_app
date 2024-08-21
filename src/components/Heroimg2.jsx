// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Heroimg2Styles.css";

class Heroimg2 extends Component  {
    render (){
        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

// Define propTypes for the component
//defines that they must be strings 
Heroimg2.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Heroimg2;
