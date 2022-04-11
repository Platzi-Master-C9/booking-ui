import React from 'react';
import { LoginHeader } from './LoginHeader';
import { LoginTitle } from './LoginTitle';
import { InputPhoneNumber } from './InputPhoneNumber';
import { AlternativeLogin } from './AlternativeLogin';

const div_login_style = {
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  width: '100%',
  maxWidth: '640px',
  minWidth: '320px',
  margin: 'auto',
}

export const LoginForm = () => {
  return (
    <div style={div_login_style}>
      <LoginHeader />
      <LoginTitle />
      <InputPhoneNumber />
      <AlternativeLogin />
    </div>
  );
};
