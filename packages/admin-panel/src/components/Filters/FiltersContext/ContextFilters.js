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

    const handleUnchecked = (stateTwo) => {
        const { checkedOne, checkedTwo, checkedThree, checkedFour, checkedFive, checkedSixx } = checked
        if (checkedOne === true || checkedTwo === true || checkedThree === true || checkedFour === true || checkedFive === true || checkedSixx === true) {
            {
                setFilter({
                    ...applyFilter,
                    [stateTwo]: null,
                })
            }
        }
    }

    const handleSetChecked = (state, value, stateTwo) => {
        setChecked({
            ...checked,
            [state]: value,
        })

        handleUnchecked(stateTwo)
        console.log(stateTwo)
    }

    const handleSetDelete = (stateOne, stateTwo, stateThree, stateFour, valueThree, valueOne, valueTwo) => {
        setChecked({
            ...checked,
            [stateOne]: valueOne,
            [stateTwo]: valueTwo
        })
        setFilter({
            ...applyFilter,
            [stateThree]: valueThree,
            [stateFour]: valueThree
        })

        const { optionOne, optionTwo, optionThree, optionFour, optionFive, optionSixx } = applyFilter

        if (optionOne === "" || optionTwo === "" || optionThree === "" || optionFour === "" || optionFive === "" || optionSixx === "") {
            {
                setFilter({
                    ...applyFilter,
                    [stateThree]: null,
                    [stateFour]: null
                })
            }
        }
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

    const [applyFilter, setFilter] = useState({
        optionOne: null,
        optionTwo: null,
        optionThree: null,
        optionFour: null,
        optionFive: null,
        optionSixx: null,
    })

    const filterUsers = () => {

        const prof = "profile="
        const st = "status="
        const val = "validated="

        if (checked.checkedOne === true) { setFilter({ ...applyFilter, optionOne: `${prof}2` }) }
        if (checked.checkedTwo === true) { setFilter({ ...applyFilter, optionTwo: `${prof}1` }) }
        if (checked.checkedThree === true) { setFilter({ ...applyFilter, optionThree: `${st}ACTIVE` }) }
        if (checked.checkedFour === true) { setFilter({ ...applyFilter, optionFour: `${st}BANNED` }) }
        if (checked.checkedFive === true) { setFilter({ ...applyFilter, optionFive: val + true }) }
        if (checked.checkedSixx === true) { setFilter({ ...applyFilter, optionSixx: val + false }) }
    }

    return (
        <ContextFilters.Provider value={{ checked, setChecked, show, setShow, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, clicked, setClicked, handleClose, filterUsers, applyFilter, setFilter }}>
            {props.children}
        </ContextFilters.Provider>
    )
}
