import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export class NavBar extends React.Component {

    render(){
        return(
            <>
                <nav className="nav">
                    <div className="nav-logo">
                        <h1>Jobs</h1>
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <Link  className= "nav-menu_link" to="/">INICIO</Link>
                        </li>
                        <li>
                            <Link className= "nav-menu_link" to="/paises">PAÍSES</Link>
                        </li>
                        <li>
                            <Link className= "nav-menu_link" to="/ciudades">CIUDADES</Link>
                        </li>
                        <li>
                            <Link className= "nav-menu_link" to="/empresas">EMPRESAS</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}