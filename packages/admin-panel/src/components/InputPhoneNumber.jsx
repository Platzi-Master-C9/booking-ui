import React from 'react';

const div_container = {
    width: '100%',
    textAlign: 'center',
    paddingTop: '8px',
    paddingBottom: '24px',
    borderBottom: '1px solid #000000',
}

const label_phone_number = {
    position: 'absolute',
    marginLeft: '28px',
    marginTop: '4px',
    fontSize: '16px',
    color: '#404040'
}

const input_phone_number = {
  width: '90%',
  height: '72px',
  borderRadius: '24px',
  fontSize: '32px',
  paddingLeft: '24px',
  paddingTop: '24px'
}

const footer_phone_number = {
    marginTop: '4px',
    fontSize: '12px',
    color: '#666666'
}

export const InputPhoneNumber = () => {
  return (
      <div style={div_container}>
          <label style={label_phone_number}>Número de teléfono</label>
          <input 
            type={'phone'} 
            style={input_phone_number} 
            placeholder={'5555555555'} 
            maxlength="10" 
            pattern="[0-9]*"
            onKeyPress={
                (evt)=>{
                    var theEvent = evt || window.event;
                    if (theEvent.type === 'paste') {
                        key = event.clipboardData.getData('text/plain');
                    } else {
                        var key = theEvent.keyCode || theEvent.which;
                        key = String.fromCharCode(key);
                    }
                    var regex = /[0-9]|\./;
                    if( !regex.test(key) ) {
                        theEvent.returnValue = false;
                        if(theEvent.preventDefault) theEvent.preventDefault();
                    }
                }
            } />
            <div style={footer_phone_number}>Ingresa tu número para iniciar sesión o registrarte. Te enviaremos un código de verificación.</div>
      </div>
  );
};
