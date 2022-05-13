import React, { useState } from "react";
import DatePickerDescriptions from "./DatePickerDescriptions";

const DatePickerButtonCheck = ({ feePerService, taxes, feePerNight }) => {
  // use a hook state to change the text on the button
  const [buttonText, setButtonText] = useState("Comprobar disponibilidad");

  // create a variable to store the function that will set the new state
  const changeText = (text) => {
    setButtonText("Comprobando");
    setTimeout(() => {
      setButtonText(text);
    }, 4000);
  };

  return (
    <>
      <button onClick={() => changeText("Reservar")}>{buttonText}</button>
      {buttonText === "Reservar" ? (
        <DatePickerDescriptions
          feePerNight={feePerNight}
          feePerService={feePerService}
          taxes={taxes}
        />
      ) : null}
    </>
  );
};

export default DatePickerButtonCheck;
