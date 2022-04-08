import { useState } from "react";

export default function DeleteCardItem() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [successDeleteModal, setSuccessDeleteModal] = useState(false);

  function toggleDeleteModal() {
    setOpenDeleteModal(!openDeleteModal);
  }

  function toggleSuccessDeleteModal() {
    setSuccessDeleteModal(!successDeleteModal);
  }

  function deleteList() {
    toggleDeleteModal();
    toggleSuccessDeleteModal();
  }

  return (
    <>
      <i className="fa-solid fa-trash" onClick={toggleDeleteModal}></i>

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
          <button id="cancel" onClick={toggleDeleteModal}>
            Cancelar
          </button>
          <button id="delete" onClick={deleteList}>
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
        <button id="confirm" onClick={toggleSuccessDeleteModal}>
          Continuar
        </button>
      </article>
    </div>
  );
}
