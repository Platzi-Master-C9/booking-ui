import { Auth0Provider } from '@auth0/auth0-react';
import Landing from './landing';

export default function Home() {
  return (
    <Auth0Provider
      domain="dev-3a0o0153.us.auth0.com"
      clientId="rsEvJkpsMWUxYjuELF9EiGxXmCzVfK4e"
      redirectUri="http://localhost:3000"
      audience="https://booking-ui/api"
    >
      <Landing />
    </Auth0Provider>
  );
}
