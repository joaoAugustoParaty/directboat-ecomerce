import React from 'react';

import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";

import {Container, Row, Col} from "reactstrap";

import heroImg from '../assets/images/motor-logo.png';

import Services from '../services/Services';


const Home = () => {
  const year = new Date().getFullYear()
  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Produto em alta em {year}</p>
              <h2>Atualize a sua embarcação</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repellat voluptate repellendus, odit ducimus quas, voluptatum blanditiis nulla vero esse ratione aliquid ea reprehenderit! Obcaecati voluptatem excepturi dignissimos dolorem delectus!</p>

              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Compre agora</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
    <Services/>
  </Helmet>
}

export default Home