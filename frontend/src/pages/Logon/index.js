/* eslint-disable react/self-closing-comp */
import React from 'react';
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
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;
