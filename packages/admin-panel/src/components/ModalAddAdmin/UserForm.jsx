import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "./hooks/useFormulario";
import Select from "./Select";
import "./style/Button.css";

const UserForm = ({ openModalAddAdmin }) => {
  const [formulario, handleChange, reset, submit] = useFormulario({
    first_name: "",
    second_name: "",
    first_surname: "",
    second_surname: "",
    profile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formulario.profile) {
      submit(formulario);
      // reset();
      // openModalAddAdmin();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Primer nombre"
          type="text"
          name="first_name"
          placeholder=""
          value={formulario.first_name}
          onChange={handleChange}
          required
        />
        <Input
          label="Segundo nombre"
          type="text"
          name="second_name"
          placeholder=""
          value={formulario.second_name}
          onChange={handleChange}
        />
        <Input
          label="Primer apellido"
          type="text"
          name="first_surname"
          placeholder=""
          value={formulario.first_surname}
          onChange={handleChange}
          required
        />
        <Input
          label="Segundo apellido"
          type="text"
          name="second_surname"
          placeholder=""
          value={formulario.second_surname}
          onChange={handleChange}
        />
        <Select
          label="Tipo de administrador"
          className="select-ModalAddAdmin"
          name="profile"
          value={formulario.profile}
          onChange={handleChange}
        />
        <Button>Enviar</Button>
      </form>
      <div style={{ height: 0 }}>
        <button
          onClick={openModalAddAdmin}
          id="buttonCancel-ModalAddAdmin"
          className="button-ModalAddAdmin"
        >
          Cancelar
        </button>
      </div>
    </>
  );
};

export default UserForm;
