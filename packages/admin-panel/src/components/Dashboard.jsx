import React, { useState, useEffect } from 'react';

import styles from '../assets/styles/Dashboard.module.scss';

export const Dashboard = () => {
  const [data, setData] = useState({ results: [] });
  const [error, setError] = useState(null);
  const MOCK_API = 'https://apimocha.com/boocking-pad/admins';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MOCK_API);
      const data = await response.json();
      setData({ results: data.results });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section className={styles.dashboard}>
      <h2>Administradores (E.g)</h2>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={styles.item__tag}>Nombre y apellido</div>
          <div className={styles.item__tag}>Tipo</div>
          <div className={styles.item__tag}>Estado</div>
          <div className={styles.item__tag}>Validación</div>
          <div className={styles.item__tag}>Fecha</div>
          <div className={styles.manage}>Manejar</div>
        </li>
      </ul>
    </section>
  );
};
