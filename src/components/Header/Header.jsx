import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

import logo from '../../assets/images/eco-logo.png'

import { Container, Row } from 'reactstrap';

const Header = () => {
  return <header className='header'>
    <Container>
        <Row>
            <div className="nav__wrapper">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                    <div>
                        <h1>Directboat</h1>
                        <p>Desde 1998</p>
                    </div>
                </div>
                </div>
                <div className="navigation">
                    <ul className="menu">
                        <li className="nav__item">
                           <NavLink to='home'>Home</NavLink>
                           <NavLink to='home'>Shop</NavLink>
                           <NavLink to='home'>Cart</NavLink>
                        </li>
                    </ul>
                </div>
        </Row>
    </Container>
  </header>
}

export default Header