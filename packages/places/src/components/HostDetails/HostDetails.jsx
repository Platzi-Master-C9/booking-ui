import React from 'react';
import './hostDetails.scss';

function HostDetails(props) {
  return (
    <div className="host-details-container">
      <img className="host-details__img" src={props.photoHost} />
      <h3>
        Host: {props.host}
      </h3>
      <p className="host-details__date">Was registered in {props.registerDate}</p>

      <div className="host-details__ranking">
        <img className="data__icon-start" src="/places/startRanking.png" alt="Start Ranking"/>
        <p className="ratings"> {props.ratings} reviews</p>

        <img className="verified-user__icon" src="/places/verifiedUser.png" alt="Verified Symbol" />
        <p className="id-validation">{props.id} Verified identity</p>
      </div>
      <div className="host-details__section">
        <div className="details-bio">
          <p className="host-bio">{props.hostBio}</p>
          <a href="/">Show more</a>
        </div>
        <div className="host-info">
          <ul className="host-info__list" >
            <li>Lenguges: {props.languages}</li>
            <li>Response rate: {props.responseIndex} %</li>
            <li>Response time: {props.responseTime}</li>
          </ul>
          <button>Contact the host</button>
        </div>
      </div>
    </div>
  );
}

export { HostDetails };
