import React from "react";

import css from './DatePicker.module.scss'


const DatePickerForm = () => {
  return (
    <section className={css["date-picker-form"]}>
      <div className={css["check-in-container"]}>
        <label htmlFor="check-in">Llegada</label>
        <input type="text" name="check-in" id="" placeholder="Agrega una fecha"/>
      </div>

      <div className={css["checkout-container"]}>
        <label htmlFor="checkout">Salida</label>
        <input type="text" name="checkout" id="" placeholder="Agrega una fecha"/>
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
