import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

export const Authentication = () => {
  const handleConectAuthServices = async () => {
    const response = await fetch('http://localhost:3000/auth/hi');
    const data = response.json();
    console.log('>>>data', data);
  };

  return (
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri="/"
    >
      <h1>Hello from Authentication</h1>
      <button onClick={() => handleConectAuthServices()}>
        Run service "auth/host"
      </button>
    </Auth0Provider>
  );
};
