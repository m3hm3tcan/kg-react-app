import React from "react";
import { useHistory } from 'react-router-dom'

const Header = ({ user }) => {
    const history = useHistory()
    
    const handleLogout = () =>{
        localStorage.removeItem('token')
        history.replace('/')
    }

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Frontend React Developer Test</a>
            <form className="form-inline">
                <a className="navbar-brand">Welcome {user}</a>
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handleLogout}>Loguot</button>
            </form>
        </nav>
    )
}

export default Header;