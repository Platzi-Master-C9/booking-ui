import React from 'react';
import { LoginForm } from './LoginForm';

const login_container = {
    width: '100%',
    paddingTop: '64px'
}

export const LoginContainer = () => {
  return (
    <div style={login_container}>
        <LoginForm />
    </div>
  );
};