import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Headet.css'

function Header() {
    const navigation = useNavigate()
    const location = useLocation()
    const pathName = location.pathname
    console.log(pathName);
    return (
        <div className="header">
            <header className="header_left"></header>
            <header className="header_center">
                <p onClick={()=>navigation('/')} style={{borderBottom:`${pathName === '/' && `3px solid black`}`, cursor:'pointer'}}>Home</p>
                <p>About us</p>
                <p>Treatments</p>
                <p>About Doctor</p>
                <p>Location</p>
                <button onClick={()=>navigation('book')}>Book appointment</button>
            </header>
            {/* <header className="header_right"></header> */}
        </div>
    )
}

export default Header