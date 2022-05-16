import React from 'react';

import { Layout, Dashboard } from '@booking-ui/shared';
import { ContextOfFilters } from '@booking-ui/admin-panel/src/components/Filters/FiltersContext/ContextFilters';
const Users = () => (
  <Layout>
    <ContextOfFilters>
      <Dashboard />
    </ContextOfFilters>

  </Layout>
);

export default Users;
