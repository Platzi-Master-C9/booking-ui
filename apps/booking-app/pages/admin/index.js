import React from 'react';
import { LoginContainer } from '../../../../packages/admin-panel/src/components/LoginContainer'
import { FiltersContainer } from '@booking-ui/admin-panel';

const Admin = () => {
    return (
        <>
            <LoginContainer />
            <FiltersContainer />
        </>
    );
};

export default Admin;
