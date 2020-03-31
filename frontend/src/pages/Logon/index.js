/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import './style.css';

import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="logo" />

        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;