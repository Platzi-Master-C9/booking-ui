import React from "react";

import css from "./DatePicker.module.scss";
import DatePickerForm from "./DatePickerForm";
import DatePickerButtonCheck from "./DatePickerButtonCheck";

const DatePicker = () => {
  const feePerNight = 285040;
  const feePerService = 44000;
  const taxes = 20000;


  return (
    <div className={css["container"]}>
      <p className={css["night-fee"]}>
        <b> ${feePerNight} COP</b> / noche
      </p>
      <DatePickerForm />
      <DatePickerButtonCheck
        feePerNight={feePerNight}
        feePerService={feePerService}
        taxes={taxes}
      />
    </div>
  );
};

export default DatePicker;
