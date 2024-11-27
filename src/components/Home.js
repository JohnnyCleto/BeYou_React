import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Sistema!</h1>
      <p>Escolha uma opção para continuar:</p>
      <div className="home-actions">
        <Link to="/login" className="action-button">
          Fazer Login
        </Link>
        <Link to="/register" className="action-button">
          Registrar-se
        </Link>
      </div>
    </div>
  );
};

export default Home;
