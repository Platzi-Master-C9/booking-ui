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

    const handleClose = () => {

        const { showOne, showTwo, showThree } = show
        if (showOne === true || showTwo === true || showThree === true) {
            setShow({
                ...show,
                showOne: false,
                showTwo: false,
                showThree: false
            })
        }
    }

    return (
        <ContextFilters.Provider value={{ checked, setChecked, show, setShow, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, clicked, setClicked, handleClose }}>
            {props.children}
        </ContextFilters.Provider>
    )
}
