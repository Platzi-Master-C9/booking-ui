import React from "react";

export const CreateAdminModal = () => {
  const [addAdmin, setAddAdmin] = React.useState(false);
  return (
    <div>
      <button>Add Admin</button>
      <div>
        <h1>Crear Administrador</h1>
      </div>
    </div>
  );
};
