import { useState } from "react";
import "./assets/styles/deleteFavoriteList.css"

export default function DeleteCardItem() {

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [successDeleteModal, setSuccessDeleteModal] = useState(false);

  function toggleDeleteModal(event) {
    if (event) event.stopPropagation() 
    setOpenDeleteModal(!openDeleteModal);
  }

  function toggleSuccessDeleteModal(event) {
    if (event) event.stopPropagation() 
    setSuccessDeleteModal(!successDeleteModal);
  }

  function deleteList(event) {
    if (event) event.stopPropagation() 
    toggleDeleteModal();
    toggleSuccessDeleteModal();
  }

  return (
    <>
      <i className="fa-solid fa-trash" onClick={event => toggleDeleteModal(event)} ></i>

      {openDeleteModal && (
        <DeleteCardConfirm
          deleteList={deleteList}
          toggleDeleteModal={toggleDeleteModal}
        />
      )}
      {successDeleteModal && (
        <DeleteCardSuccess
          toggleSuccessDeleteModal={toggleSuccessDeleteModal}
        />
      )}
    </>
  );
}

function DeleteCardConfirm({ deleteList, toggleDeleteModal }) {
  return (
    <div className="modal-container">
      <div className="white_card-confirm">
        <i className="fa-solid fa-trash"></i>
        <p>
          ¿Estas seguro que deseas borrar la lista Vacaciones con mi familia? Se
          borraran todos los favoritos que contiene esta lista
        </p>
        <div className="white_card-buttons">
          <button id="cancel" onClick={event => toggleDeleteModal(event)}>
            Cancelar
          </button>
          <button id="delete" onClick={event => deleteList(event)}>
            Borrar lista
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteCardSuccess({ toggleSuccessDeleteModal }) {
  return (
    <div className="modal-container">
      <article className="success-delete">
        <p>Se ha eliminado exitosamente la lista</p>
        <hr />
        <button id="confirm" onClick={event => toggleSuccessDeleteModal(event)}>
          Continuar
        </button>
      </article>
    </div>
  );
}