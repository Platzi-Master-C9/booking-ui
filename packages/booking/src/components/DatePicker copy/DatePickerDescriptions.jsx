import React from "react";

import css from "./DatePicker.module.scss";

const DatePickerDescriptions = ({ feePerNight, feePerService, taxes }) => {
  return (
    <section className={css["date-picker-descriptions"]}>
      <p className={css["descriptions"]}>
        <span> {feePerNight} x 1 noche</span>
        <span> Comisión por servicio</span>
        <span> Impuestos y tarifas</span>
      </p>
      <p className={css["amounts"]}>
        <span>$ {feePerNight} </span>
        <span>$ {feePerService} </span>
        <span>$ {taxes} </span>
      </p>
      <p className={css["total-container"]}>
        <b className={css["total-text"]}> Total </b>
        <b className={css["total-amount"]}>
          {" "}
          $ {feePerNight + feePerService + taxes}{" "}
        </b>
      </p>
    </section>
  );
};

export default DatePickerDescriptions;
