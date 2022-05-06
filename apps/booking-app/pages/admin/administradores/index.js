import React from 'react';

import { Layout, Dashboard, LayoutAdministrators } from '@booking-ui/shared';
import { ContextOfFilters } from '@booking-ui/admin-panel/src/components/Filters/FiltersContext/ContextFilters';
const Administradores = () => {
  const url = 'https://demo8248442.mockable.io/admins';
  return (
    <Layout>
      <ContextOfFilters>
        <LayoutAdministrators url={url} />
      </ContextOfFilters>
    </Layout>
  );
};

export default Administradores;