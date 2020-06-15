import React, {Component} from "react";
import LinkWrapper from './LinkWrapper';
import {NavLink} from "react-router-dom";


class Header extends Component{

    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-1">
                    <LinkWrapper to="/" activeStyle={{}} className="brand-logo">Frederyk</LinkWrapper>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                        <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;