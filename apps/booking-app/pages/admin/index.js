import React from 'react';

import { LoginContainer } from '../../../../packages/admin-panel/src/components/LoginContainer';
import { FiltersContainer } from '@booking-ui/admin-panel';
import { ContextOfFilters } from '@booking-ui/admin-panel/src/components/Filters/FiltersContext/ContextFilters';

import { Layout, Dashboard } from '@booking-ui/shared';

const Admin = () => {

    return (
        <>
            <LoginContainer />
            {/* <ContextOfFilters>
                <FiltersContainer />
            </ContextOfFilters> */}
        </>
    );

};

export default Admin;
