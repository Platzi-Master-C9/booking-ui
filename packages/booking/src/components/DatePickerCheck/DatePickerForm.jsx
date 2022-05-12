import React, { useState } from "react";

import css from "./DatePicker.module.scss";

const DatePickerForm = () => {
  const [checkinType, setCheckinType] = useState("text");
  const [checkoutType, setCheckoutType] = useState("text");

  const handleCheckinClick = (Type) => {
    setCheckinType("date");
  };

  const handleCheckoutClick = (Type) => {
    setCheckoutType("date");
  };
  
  return (
    <section className={css["date-picker-form"]}>
      <div className={css["check-in-container"]}>
        <label htmlFor="check-in">Llegada</label>
        <input
          onClick={handleCheckinClick}
          type={checkinType}
          name="check-in"
          id=""
          placeholder="Ingresa una fecha"
        />
      </div>

      <div className={css["checkout-container"]}>
        <label htmlFor="checkout">Salida</label>
        <input
          onClick={handleCheckoutClick}
          type={checkoutType}
          name="checkout"
          id=""
          placeholder="Ingresa una fecha"
        />
      </div>

      <div className={css["guest-counter-container"]}>
        <label htmlFor="guests">Huéspedes</label>
        <select name="guests" id="">
          <option value="1">1 Huésped</option>
          <option value="2">2 Huéspedes</option>
          <option value="3">3 Huéspedes</option>
          <option value="4">4 Huéspedes</option>
          <option value="5">5 Huéspedes</option>
          <option value="6">6 Huéspedes</option>
          <option value="7">7 Huéspedes</option>
          <option value="8">8 Huéspedes</option>
          <option value="9">9 Huéspedes</option>
          <option value="10">10 Huéspedes</option>
        </select>
      </div>
    </section>
  );
};

export default DatePickerForm;
