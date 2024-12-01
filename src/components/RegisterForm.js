import React from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import for useNavigate
import './RegisterForm.css';


const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div className="background_img">
      <form className="formulario">
        <h1>Cadastro</h1>
        <label htmlFor="nome"><b>Nome</b></label>
        <input type="text" placeholder="Digite seu nome" name="nome" required />

        <label htmlFor="email"><b>E-mail</b></label>
        <input type="text" placeholder="Digite seu e-mail" name="email" required />

        <label htmlFor="psw"><b>Senha</b></label>
        <input type="password" placeholder="Digite sua senha" name="psw" required />

        <label htmlFor="psw-confirm"><b>Confirmar Senha</b></label>
        <input type="password" placeholder="Confirme sua senha" name="psw-confirm" required />

        <div className="checkbox">
          <input type="checkbox" id="concordo" name="concordo" required />
          <label htmlFor="concordo">
            Li e concordo com os <a href="#">termos de uso</a>
          </label>
        </div>

        <button type="button" className="botao_cadastrar" onClick={() => navigate('/login')}>Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
