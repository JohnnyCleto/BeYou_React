import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home'); // Redireciona para a página "Home"
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleRegister = () => {
    navigate('/cadastrar'); // Redireciona para a página "RegisterForm"
  };

  return (
    <div className="background_img">
      <form className="formulario" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Digite seu email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password"><b>Senha</b></label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <a href="#" className="esqueci_senha">Esqueci minha senha</a>
        </div>
        <button type="submit" className="botao_login">Entrar</button>
        <button type="button" className="botao_cadastrar" onClick={handleRegister}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
