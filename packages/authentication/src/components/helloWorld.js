import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';

export const Authentication = () => {
  const { logout, getAccessTokenSilently, isAuthenticated, loginWithRedirect } =
    useAuth0();

  const handleConectAuthServices = async () => {
    const token = await getAccessTokenSilently({
      audience: 'https://hinojsa0/api/v2/',
      scope: 'read:post',
    });
    try {
      const response = await fetch('http://localhost:3001/auth/private', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('>>>data', data);
    } catch (error) {
      console.error('Error');
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <h1>HELLO AUTENTICATED</h1>
        <button onClick={handleConectAuthServices}>Use app</button>
        <br />
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Log out
        </button>
      </>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
};
