import React from "react";
import css from './perks.module.scss';

export const Perks = () => {
  return (
    <div className={css.perks}>
      <h1>What this place offers</h1>
      <ul>
        <li><img src="/places/kitchen.png" />Kitchen</li>
        <li><img src="/places/parkingLot.png" />Free parking</li>
        <li><img src="/places/tv.png" />TV</li>
        <li><img src="/places/washer.png" />Washer</li>
        <li><img src="/places/wifi.png" />Wifi</li>
        <li><img src="/places/pool.png" />Pool</li>
        <li><img src="/places/bathtub.png" />Hot water</li>
        <li><img src="/places/heating.png" />Heating</li>
      </ul>
      <a href="#">Show more</a>
    </div>
  );
};

export default Perks;
