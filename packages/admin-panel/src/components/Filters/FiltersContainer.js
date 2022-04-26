import React, { useContext } from 'react';
import { CardContainer } from './CardContainer';
import "./filters.css";
import { ContextFilters } from './FiltersContext/ContextFilters';

export const FiltersContainer = () => {

    const { checked, setChecked, show, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, filterUsers, users } = useContext(ContextFilters)

    return (
        <>
            <button className='buttonFilter' onClick={() => setOpenFilters(true)}>Filtrar</button>
            <div className='containerFilters'>
                <div className="containerCards">
                    <CardContainer type={"Tipo"} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" show={show.showOne} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} handleSetShow={() => handleSetShow("showOne", !show.showOne)} handleChexboxOne={(e) => handleSetChecked("checkedOne", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedTwo", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedOne", "checkedTwo", false, false)} />
                    <CardContainer type={"Estado"} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" show={show.showTwo} checkedOne={checked.checkedThree} checkedTwo={checked.checkedFour} handleSetShow={() => handleSetShow("showTwo", !show.showTwo)} handleChexboxOne={(e) => handleSetChecked("checkedThree", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedFour", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedThree", "checkedFour", false, false)} />
                    <CardContainer type={"Validación"} titleOne="Sí" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" show={show.showThree} checkedOne={checked.checkedFive} checkedTwo={checked.checkedSixx} handleSetShow={() => handleSetShow("showThree", !show.showThree)} handleChexboxOne={(e) => handleSetChecked("checkedFive", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedSixx", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedFive", "checkedSixx", false, false)} />
                </div>
            </div>
            <div className="containerUsers">
                {
                    filterUsers.length === 0 ? (
                        users.map((u) => (
                            <article>
                                <p key={1}>{u.nombre}</p>
                                <p key={2}>{u.tipo}</p>
                                <p key={3}>{u.estado}</p>
                                <p key={4}>{u.validacion}</p>
                            </article>))
                    ) : (
                        filterUsers.map((u) => (
                            <article>
                                <p key={5}>{u.nombre}</p>
                                <p key={6}>{u.tipo}</p>
                                <p key={7}>{u.estado}</p>
                                <p key={8}>{u.validacion}</p>
                            </article>
                        )))
                }
            </div>
            {
                openFilters && <div id='filter' className='modal'>
                    <div className='containerFiltersTwo'>
                        <figure onClick={() => setOpenFilters(false)} className='containerEx'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="eq" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </figure>
                        <div className="containerCards">
                            <CardContainer type={"Tipo"} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" show={show.showOne} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} handleSetShow={() => handleSetShow("showOne", !show.showOne)} handleChexboxOne={(e) => handleSetChecked("checkedOne", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedTwo", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedOne", "checkedTwo", false, false)} />
                            <CardContainer type={"Estado"} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" show={show.showTwo} checkedOne={checked.checkedThree} checkedTwo={checked.checkedFour} handleSetShow={() => handleSetShow("showTwo", !show.showTwo)} handleChexboxOne={(e) => handleSetChecked("checkedThree", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedFour", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedThree", "checkedFour", false, false)} />
                            <CardContainer type={"Validación"} titleOne="Sí" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" show={show.showThree} checkedOne={checked.checkedFive} checkedTwo={checked.checkedSixx} handleSetShow={() => handleSetShow("showThree", !show.showThree)} handleChexboxOne={(e) => handleSetChecked("checkedFive", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedSixx", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedFive", "checkedSixx", false, false)} />
                            <div className='containerButtons'>
                                <button onClick={() => setChecked({ checkedOne: false, checkedTwo: false, checkedThree: false, checkedFour: false, checkedFive: false, checkedSixx: false })} className='buttonDelete'>
                                    Borrar
                                </button>
                                <button className='buttonSave'>
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
