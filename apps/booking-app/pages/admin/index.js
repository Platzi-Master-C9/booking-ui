import React from 'react';
import { LoginContainer } from '../../../../packages/admin-panel/src/components/LoginContainer'

const isLogged = false;

const Admin = () => {
  if(isLogged){
    return (
      <>Metric</>
    );
  }else{
    return (
      <LoginContainer />
    );
  }
};

export default Admin;
