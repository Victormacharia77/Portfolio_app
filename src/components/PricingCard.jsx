import "./PricingCardStyles.css";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">Ksh 1500</p>
          <p>- 3 Days -</p>
          <p>- 3 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/Contact' className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Premuim -</h3>
          <span className="bar"></span>
          <p className="btc">Ksh 2500</p>
          <p>- 2 days -</p>
          <p>- 5 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/Contact' className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">Ksh 3500</p>
          <p>- 5 Days -</p>
          <p>- 8 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to='/Contact' className="btn">
            PURCHASE NOW
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PricingCard;
