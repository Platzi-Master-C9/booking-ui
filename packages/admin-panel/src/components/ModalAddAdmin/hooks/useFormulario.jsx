import { useState } from "react";

const useFormulario = (inicial) => {
  const api_url =
    "https://admin-panel-booking-services.herokuapp.com/admin-panel/admins";

  const [formulario, setFormulario] = useState(inicial);
  // const [newAdmins, setAdmins] = useState([]);

  const submit = async (newAdmin) => {
    console.log(newAdmin);
    const res = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newAdmin,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log(
        `Hubo un error al enviar al admin: ${res.status} ${data.message}`
      );
    } else {
      console.log("Se envió el Admin :)");
      console.log({ data });
      console.log(data.url);
      saveFavGatos(data.id);
    }
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    console.log(formulario);
  };

  const reset = () => {
    setFormulario(inicial);
  };

  return [formulario, handleChange, reset, submit];
};

export default useFormulario;
