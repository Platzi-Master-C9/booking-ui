import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InputContainer({ label, value, sub, type, containerId }) {
  const showToast = ( type = "success", msg, autoClose = 5000, className = "primaryColor", position = "top-center" ) => {
    if (type === "success") {
      toast.success(msg, {
        autoClose: autoClose === null ? 2000 : autoClose,
        className: className === null ? "primaryColor" : className,
        position: position,
      });
    } else if (type === "error") {
      toast.error(msg, {
        autoClose: autoClose === null ? 2000 : autoClose,
        className: className === null ? "dangerColor" : className,
        position: position,
      });
    }
  };
  const [inputvalue, setInputValue] = useState("") 
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  function save(){
      let input = document.getElementById(containerId).value;
        allLetter(input)
  }

  function allLetter(inputtxt)
      { 
        if (type == "alphabet"){
          var letters = /^[A-Za-z]+$/;
          if(inputtxt.match(letters)){
            setText(inputtxt)
            handleGameClick()
            showToast('success', 'Your details have been updated');
          } else
          {
            showToast('error', 'Please input alphabet characters only');
            return false;
          }
        }
        if (type == "number"){
          var numbers = /^[0-9]+$/;
          if(inputtxt.match(numbers)){
            setText(inputtxt)
            handleGameClick()
            showToast('success', 'Your details have been updated');
          } else {
            showToast('error', 'Please input numbers only');
            return (false)
          }
        }
        if (type == "mail"){
          var mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if(inputtxt.match(mail)){
            showToast('success', 'Your details have been updated');
            setText(inputtxt)
            handleGameClick()
            
          } else {
            showToast('error', 'Please input a valid email');
            return (false)
          }
        }
        if (type == "passport"){
          var passport = /^(?!^0+$)[a-zA-Z0-9]{6,9}$/;
          if(inputtxt.match(passport)){
            setText(inputtxt)
            handleGameClick()
            showToast('success', 'Your details have been updated');
          } else {
            showToast('error', 'Please input a valid passport');
            return (false)
          }
        }
        if (type == "select"){
          setText(inputtxt)
            handleGameClick()
        }
        
      }
  const [text, setText] = useState("");
  return (
    <div className="inputContainer" >
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
      <label>{label}</label>
      {isActive && sub && <span onClick={handleGameClick}>Editar</span>}
      {!isActive && sub && <span onClick={save}>Guardar</span>}

      <div className="data-input">
        {!isActive && sub && (
          <div className="data-input-item">
            
            <input
          id ={containerId ? containerId : "id_test"}
          type="text" 
          value={text ? text : value}
          onChange={(e) => setText(e.target.value)}
        />
            <sub>{sub}</sub>
          </div>
        )}
      </div>
      <div className="data-text">
        {isActive && <p>{text ? text : value}</p>}
      </div>
    </div>
  );
}