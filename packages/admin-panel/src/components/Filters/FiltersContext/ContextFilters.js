import React, { useState } from 'react'

export const ContextFilters = React.createContext({});

export const ContextOfFilters = (props) => {

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
    const [clicked, setClicked] = useState(false);

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
        if ([state] !== true) {
            setClicked(false)
        }
    }

    const handleSetDelete = (stateOne, stateTwo, valueOne, valueTwo) => {
        setChecked({
            ...checked,
            [stateOne]: valueOne,
            [stateTwo]: valueTwo
        })
        setClicked(false)
    }

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

    const handleClose = () => {

        const { showOne, showTwo, showThree } = show
        if (showOne === true && clicked === true || showTwo === true && clicked === true || showThree === true && clicked === true) {
            setShow({
                ...show,
                showOne: false,
                showTwo: false,
                showThree: false
            })
        }
    }

    return (
        <ContextFilters.Provider value={{ checked, setChecked, show, setShow, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, users, clicked, setClicked, handleClose }}>
            {props.children}
        </ContextFilters.Provider>
    )
}
