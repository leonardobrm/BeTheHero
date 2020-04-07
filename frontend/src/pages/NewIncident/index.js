import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import swal from 'sweetalert2';
import './style.css';

import api from '../../services/api';
import LogoImg from '../../assets/logo.svg';

function NewIncident() {
  const [title, setTitle] = useState('');
  const [descripton, setDescripton] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function hundleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      descripton,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      await swal.fire({
        title: 'Sucesso',
        text: 'Caso criado com sucesso',
        icon: 'success',
        button: 'OK',
        background: 'black',
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      history.push('/profile');
    } catch (err) {
      await swal.fire({
        title: 'Erro',
        text: 'Erro ao criar um caso, tente novamente',
        icon: 'error',
        button: 'OK',
        background: 'black',
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Heroes" />

          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input
            placeholder="Título do caso "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={descripton}
            onChange={(e) => setDescripton(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={hundleNewIncident} className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
