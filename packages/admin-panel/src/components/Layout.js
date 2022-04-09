import React from 'react';

import '../assets/styles/Layout.css';

export const Layout = () => (
  <main className="layout__container">
    <section className="layout-container__lateral-menu">
      <div>Here should be the latreal menu</div>
    </section>
    <section className="layout-container__dashboard">
      <div className="layout-container__dashboard--title">
        <h2>Usuarios</h2>
      </div>
      <div className="layout-container__dashboard--data"></div>
    </section>
  </main>
);
