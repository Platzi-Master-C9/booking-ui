import React from 'react';

import '../assets/styles/TableItems.css';

export const TableItems = () => (
  <>
    <table>
      <thead>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Estado</th>
        <th scope="col">Validación</th>
        <th scope="col">Fecha</th>
      </thead>
      <tr className="table__row">
        <td>Pedro Silva</td>
        <td>Anfitrión</td>
        <td>Activo</td>
        <td>Si</td>
        <td>11/04/22</td>
        <td>Manejar</td>
      </tr>
    </table>
  </>
);
