import React from 'react';
import { LoginForm } from './LoginForm';

const loginContainer = {
    width: '100%',
    paddingTop: '64px'
}

export const LoginContainer = () => {
  return (
    <div style={loginContainer}>
        
        <LoginForm />
    
    </div>
  );
};