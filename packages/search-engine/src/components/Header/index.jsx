import React, {useState}  from 'react';
import './styles/Header.css';
import { SearchIcon} from '@heroicons/react/solid';
import { UserIcon } from '@heroicons/react/solid';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useNavigate} from "react-router-dom";


const handlerSubmit = (e) =>{
    e.preventDefault();
}

const Header = () => {
    
    const navigate = useNavigate();

    const [inputSearch, setInputSearch] = useState({
        location: '',
        checkIn: null,
        checkOut: null,
        guests: 0
    });

    const handlerChange = (e) => {
        console.log(e.target.value)
        setInputSearch({
            ...inputSearch,
            [e.target.name]: e.target.value
        })
    }

    const handlerButton = () =>{
        console.log(inputSearch)
        navigate("/result")
    }
    

    return (
        
            <header className='container' title='header'>
                
                {/* left - Icon */}
                <div>
                    <button className='icon'>
                        <a className='icon-tx' href="/">BS</a>
                    </button>
                </div>
                    
                {/* Middle - SearchBar */}
                <div className='searchBar'>
                    <div className='wrapper'>
                        <form className='form' onSubmit={handlerSubmit}>
                            <div className='linea_Caja'>
                                <label className='label'>Ubicación</label>
                                <input className='box' name="location"  type="text" placeholder='¿A donde vas?' value={inputSearch.location} onChange={handlerChange} />
                            </div>
                            <div className='linea_Caja'>
                                <label className='label'>Llegada</label>
                                <DatePicker 
                                    className='box' 
                                    placeholderText="Agrega fechas" 
                                    selected={inputSearch.checkIn} 
                                    onChange={handlerChange}
                                    name="checkIn"
                                    // onChange={ date => {
                                    //     setCheckIn(date)
                                    //     console.log(checkIn)}} 
                                />
                              
                            </div>
                            <div className='linea_Caja'>
                                <label className='label'>Salida</label>
                                <DatePicker 
                                    className='box' 
                                    placeholderText="Agrega fechas" 
                                    selected={inputSearch.checkOut} 
                                    onChange={handlerChange}
                                    name="checkOut"
                                    // onChange={ date => {
                                    //     setCheckOut(date)
                                    //     console.log(checkOut)}} 
                                />
                                
                                {/* <input className='box' type="date" placeholder='Agrega fechas' value={checkOut} onChange={handleChangeCheckOut}/> */}
                            </div>
                            <div>
                                <label className='label'>Huéspedes</label>
                                <input className='box_host' type="text" placeholder='¿Cuántos?' min='1' name="guests" value={inputSearch.guests} onChange={handlerChange}/>
                            </div>
                            <SearchIcon className='lupa' type="submit" onClick={()=> handlerButton()}/>
                        </form>
                    </div>
                </div>
                
                {/* Right - Host */}
                <div className='host'>
                    <spam className='host-link'>
                        <a href="/">Hazte Anfitrion</a>
                    </spam>
                    <UserIcon className='icon-host' />
                </div>

            </header>
        
        
        
    )
}



export default Header