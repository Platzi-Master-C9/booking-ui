import React, { useState } from 'react';
import { CardContainer } from './CardContainer';
import "./filters.css";

export const FiltersContainer = () => {

    const [checked, setChecked] = useState({
        checkedOne: false,
        checkedTwo: false,
        checkedThree: false,
        checkedFour: false,
        checkedFive: false,
        checkedSixx: false
    })

    const [show, setShow] = useState({
        showOne: false,
        showTwo: false,
        showThree: false,
    })

    const [openFilters, setOpenFilters] = useState(false)
    console.log(openFilters)
    const handleSetShow = (state, value) => {
        setShow({
            ...checked,
            [state]: value,
        })
    }

    const handleSetChecked = (state, value) => {
        setChecked({
            ...checked,
            [state]: value,
        })
    }

    const handleSetDelete = (stateOne, stateTwo, valueOne, valueTwo) => {
        setChecked({
            ...checked,
            [stateOne]: valueOne,
            [stateTwo]: valueTwo
        })
    }
    console.log(checked)

    const users = [
        {
            nombre: "user apellido apellido",
            tipo: "huesped",
            estado: "activo",
            validacion: "si",
        },
        {
            nombre: "user apellido apellido",
            tipo: "huesped",
            estado: "activo",
            validacion: "si",
        },
        {
            nombre: "user apellido apellido",
            tipo: "anfitrion",
            estado: "inactivo",
            validacion: "si",
        },
        {
            nombre: "user apellido apellido",
            tipo: "anfitrion",
            estado: "inactivo",
            validacion: "si",
        },
        {
            nombre: "user apellido apellido",
            tipo: "anfitrion",
            estado: "activo",
            validacion: "no",
        }
    ]

    const filterUsers = users.filter((u) => checked.checkedOne && u.tipo === "anfitrion" || checked.checkedTwo && u.tipo === "huesped" || checked.checkedThree && u.estado === "activo" || checked.checkedFour && u.estado === "inactivo" || checked.checkedFive && u.validacion === "si" || checked.checkedSixx && u.validacion === "no")

    return (
        <>
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
                                <p>{u.nombre}</p>
                                <p>{u.tipo}</p>
                                <p>{u.estado}</p>
                                <p>{u.validacion}</p>
                            </article>))
                    ) : (
                        filterUsers.map((u) => (
                            <article>
                                <p>{u.nombre}</p>
                                <p>{u.tipo}</p>
                                <p>{u.estado}</p>
                                <p>{u.validacion}</p>
                            </article>
                        )))
                }
            </div>
            <button onClick={() => setOpenFilters(true)}>Filtrar</button>
            {
                openFilters && <div id='filter' className='modal'>
                    <div className='containerFiltersTwo'>
                        <div className="containerCards">
                            <CardContainer type={"Tipo"} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" show={show.showOne} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} handleSetShow={() => handleSetShow("showOne", !show.showOne)} handleChexboxOne={(e) => handleSetChecked("checkedOne", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedTwo", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedOne", "checkedTwo", false, false)} />
                            <CardContainer type={"Estado"} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" show={show.showTwo} checkedOne={checked.checkedThree} checkedTwo={checked.checkedFour} handleSetShow={() => handleSetShow("showTwo", !show.showTwo)} handleChexboxOne={(e) => handleSetChecked("checkedThree", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedFour", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedThree", "checkedFour", false, false)} />
                            <CardContainer type={"Validación"} titleOne="Sí" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" show={show.showThree} checkedOne={checked.checkedFive} checkedTwo={checked.checkedSixx} handleSetShow={() => handleSetShow("showThree", !show.showThree)} handleChexboxOne={(e) => handleSetChecked("checkedFive", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedSixx", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedFive", "checkedSixx", false, false)} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
