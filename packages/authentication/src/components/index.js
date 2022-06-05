import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styles from './index.module.scss';

export const Authentication = () => {
  const {
    logout,
    getAccessTokenSilently,
    isAuthenticated,
    loginWithPopup,
    user,
  } = useAuth0();

  const handleCallApi = async (type) => {
    console.log('>>>user', user);
    const token = await getAccessTokenSilently({
      audience: 'https://hinojsa0/api/v2/',

      scope: 'read:post',
    });
    try {
      const response = await fetch('http://localhost:3001/auth/' + type, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('>>>. Data', data);
      alert(data.result);
    } catch (error) {
      alert('Error', error);
    }
  };

  return (
    <>
      <h1>Hello from authentication</h1>
      {isAuthenticated ? (
        <>
          <h1>Bienvenido {user.name}</h1>
          <img src={user.picture} alt={user.name} />
          <button
            className={styles.apiButton}
            onClick={() => handleCallApi('private')}
          >
            Use private app
          </button>

          <button
            className={styles.apiButton}
            onClick={() => handleCallApi('public')}
          >
            Use public app
          </button>
          <br />
          <button
            className={styles.logoutButton}
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <button onClick={loginWithPopup} className={styles.loginButton}>
          Log In
        </button>
      )}
    </>
  );
};
