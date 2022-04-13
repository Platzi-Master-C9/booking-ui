import React from 'react';
import css from './houseRules.module.scss';

export const houseRules = () => {
  return (
    <div className={css["should-know"]} >
      <h1>What you should know</h1>
      <div className="rules">
        <h2>House rules</h2>
        <ul>
          <li>Check-in: 15:00 to 02:00</li>
          <li>Checkout: 11:00 </li>
          <li>Access without time restrictions with security box with keys </li>
          <li>No pets</li>
          <li>No parties or events</li>
          <li>Smoker friendly</li>
        </ul>
      </div>
      <div className="health-security">
        <h2>Health and security</h2>
        <ul>
          <li>Committed to enhanced cleaning process.</li>
          <li>Social-distancing and other COVID-19-related guidelines apply </li>
          <li>Piscina/jacuzzi  without doors or locks</li>
          <li>Carbon monoxide detector</li>
          <li>Smoke alarm</li>
        </ul>
      </div>
      <div className="cancellations">
        <h2>Cancellation policy</h2>
        <span>Add your travel dates to get cancellation details for this stay.</span>
      </div>
    </div>
  );
};

export default houseRules;
