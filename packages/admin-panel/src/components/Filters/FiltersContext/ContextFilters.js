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


    return (
        <ContextFilters.Provider value={{ checked, setChecked, show, setShow, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, users }}>
            {props.children}
        </ContextFilters.Provider>
    )
}
