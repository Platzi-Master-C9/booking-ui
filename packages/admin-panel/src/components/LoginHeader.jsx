import React from 'react';

const div_login_header = {
  fontSize: '18px',
  lineHeight: '27px',
  fontWeight: '600',
  paddingTop: '32px',
  paddingBottom: '32px',
  borderBottom: '1px solid #000000',
  textAlign: 'center'
}

export const LoginHeader = () => {
  return (
    <div style={div_login_header}>Iniciar sesión o registrarse</div>
  );
};
