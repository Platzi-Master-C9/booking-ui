import React from "react";
import { Card } from "./Card"
// import img1 from "../assets/image22.png"
const img1 = "https://maidtocleanboise.com/files/2020/01/dl01kitchen.jpg"
import '../styles/App.css';

const data = [
  {detail:"$285.040 x 1 noche", value:"$285.040"},
  {detail:"Comisión por servicio", value:"$44.000"},
  {detail:"Impuestos y tarifas", value:"$20.000"}
]

const total = [{detail:"Total", value:"$349.040"}]

export const Booking = () => {
  return (
    <section className="App-container">
      <div className='bloque'>
      {/* <div className='bloque_der'> */}
        <Card Img={img1} Data={data} Total={total}/>
      </div>
    </section>
  )
};