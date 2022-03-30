import React from 'react';
import css from './LoginButton.module.scss';

export const LoginButton = ({ label = 'Login' }) => {
  return <button className={css.loginButton}>{label}</button>;
};
