import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "./hooks/useFormulario";
import Select from "./Select";
import "./style/Button.css";

const UserForm = ({ submit, openModalAddAdmin }) => {
  const [formulario, handleChange, reset] = useFormulario({
    fullName: "",
    profile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formulario.profile) {
      submit(formulario);
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre completo"
          type="text"
          name="fullName"
          placeholder="Nombre"
          value={formulario.fullName}
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
