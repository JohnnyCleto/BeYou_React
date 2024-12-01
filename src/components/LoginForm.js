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
      navigate('/'); // Redireciona para a página inicial
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="email"
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

        <button type="submit" className="botao_login">Entrar</button>
      </form>
      <button
        className="botao_cadastrar"
        onClick={() => navigate('/register')}
      >
        Cadastre-se
      </button>
    </div>
  );
};

export default LoginForm;
