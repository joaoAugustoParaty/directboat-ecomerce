import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

//npm i framer-motion
import {motion} from 'framer-motion';

import logo from "../../assets/images/engrenagem.png";
import userIcon from "../../assets/images/user-icon.png";

//npm i reactstrap
import { Container, Row } from "reactstrap";

const nav__links = [
    {
        path:'inicio',
        display: 'Início'
    },

    {
        path:'shop',
        display: 'Compre'
    },

    {
        path:'Cart',
        display: 'Carrinho'
    },

]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Direct Boat</h1>
              </div>
            </div>

            {/* Esse código serve para trocar o css de acordo com o click do componente do menu, pode efetuar diversos efeitos basta trocar no css o nav__active selecionado*/}
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index)=>(
                        <li className="nav__item" key={index}>
                            <NavLink 
                            to={item.path} 
                            className={(navClass)=>navClass.isActive ? "nav__active": ""}>{item.display}</NavLink>
                        </li>
                    ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="" />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
