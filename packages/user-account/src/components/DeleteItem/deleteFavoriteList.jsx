import { useState } from "react";
import axios from 'axios';
import "./assets/styles/deleteFavoriteList.css"

export default function DeleteCardItem(props) {

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [successDeleteModal, setSuccessDeleteModal] = useState(false);
  //const [openErrorModal, setOpenErrorModal] = useState(false);


  function deleteList(event) {
    if (event) event.stopPropagation() 
    axios.delete(`https://628d8d5ba339dfef879c4b9f.mockapi.io/favorites/${props.id}`).then(()=>{
      toggleDeleteModal();
      toggleSuccessDeleteModal();
    }).catch((error)=>{
      console.error(error);
    })
  }

  function toggleDeleteModal(event) {
    if (event) event.stopPropagation() 
    setOpenDeleteModal(!openDeleteModal);
  }

  function toggleSuccessDeleteModal(event) {
    if (event) event.stopPropagation() 
    setSuccessDeleteModal(!successDeleteModal);
    if (successDeleteModal === true) {
      props.onDeleteFavoriteCard();
    }
  }

  return (
    <>
      <i className="fa-solid fa-trash" onClick={event => toggleDeleteModal(event)} ></i>

      {openDeleteModal && (
        <DeleteCardConfirm
          deleteList={deleteList}
          toggleDeleteModal={toggleDeleteModal}
          listName={props.listName}
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

function DeleteCardConfirm({ deleteList, toggleDeleteModal, listName}) {
  return (
    <div className="modal-container">
      <div className="white_card-confirm">
        <i className="fa-solid fa-trash"></i>
        <p>
          ¿Estas seguro que deseas borrar la {listName}? Se
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