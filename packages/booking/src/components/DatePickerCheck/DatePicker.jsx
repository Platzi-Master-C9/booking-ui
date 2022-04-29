import React from "react";

import css from "./DatePicker.module.scss";
import DatePickerForm from "../DatePicker/DatePickerForm";
import DatePickerButton from "./DatePickerButton";


const DatePicker = () => {
  
  const feePerNight = 285040;

  return (
    <div className={css["container"]}>
      <p className={css["night-fee"]}>
        <b> ${feePerNight} COP</b> / noche
      </p>
      <DatePickerForm />
      <DatePickerButton />
    </div>
  );
};

export default DatePicker;
