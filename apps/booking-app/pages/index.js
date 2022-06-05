import { Auth0Provider } from '@auth0/auth0-react';
import { LandingPage } from '@booking-ui/shared';
import React from 'react';

const Home = () => {
  return (
    <Auth0Provider
      domain="dev-3a0o0153.us.auth0.com"
      clientId="rsEvJkpsMWUxYjuELF9EiGxXmCzVfK4e"
      redirectUri="http://localhost:3000"
      audience="https://booking-ui/api"
    >
      <LandingPage />
    </Auth0Provider>
  );
};

export default Home;
