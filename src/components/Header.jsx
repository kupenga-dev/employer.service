import React from "react";
import {NavLink} from 'react-router-dom';
import "assets/css/Header.css";
import Logout from "./Logout";
import { useAuth } from "hooks/useAuth";

const Header = () => {
    const { avatar, first_name, last_name } = useAuth();
    return (
        <header>
            <div className="header-wrapper">
                <h1 className="logo">EMPLOYEE SERVICES</h1>
                <nav>
                    <NavLink exact to ='/'>Adress Book</NavLink>
                    <NavLink exact to ='/leaverequests'>Leave Requests</NavLink>
                </nav>
                <div className="CR">
                    <button>
                        <img src="images/CR.png"  alt="" />
                    </button>
                </div>
                <div className="user">
                    <img id="avatar" src={avatar} alt="" />
                    <p>{first_name} {last_name}</p>
                </div>
                <Logout />
            </div>
        </header>
    )
}

export default Header;