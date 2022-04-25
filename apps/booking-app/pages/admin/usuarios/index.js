import React from 'react';

import { Layout, Dashboard } from '@booking-ui/shared';
<<<<<<< HEAD
import { ContextOfFilters } from '@booking-ui/admin-panel/src/components/Filters/FiltersContext/ContextFilters';
const Users = () => (
  <Layout>
    <ContextOfFilters>
      <Dashboard />
    </ContextOfFilters>

  </Layout>
);

export default Users;

=======

const Users = () => (
  <Layout>
    <Dashboard />
  </Layout>
);

export default Users;
>>>>>>> Rendered the layout in users route for admin panel
