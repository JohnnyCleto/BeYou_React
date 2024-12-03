import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleRegister = () => {
    navigate('/cadastrar');
  };

  const styles = {
    global: {
      fontFamily: 'arial, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    background_img: {
      backgroundImage: "url('./img/background_img.jpg')",
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      position: 'relative',
    },
    formulario: {
      position: 'absolute',
      right: 0,
      margin: '80px 10%',
      maxWidth: '90%',
      padding: '20px',
      backgroundColor: 'white',
      color: 'black',
      border: '2px solid #6c4539',
      borderRadius: '10px',
    },
    h1: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '15px',
      margin: '5px 0 22px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
    },
    inputFocus: {
      backgroundColor: '#ffecfc',
      outline: 'none',
    },
    esqueci_senha: {
      fontSize: '20px',
      color: '#f45bf4',
      display: 'block',
      textAlign: 'center',
      marginBottom: '20px',
      textDecoration: 'none',
    },
    esqueci_senhaHover: {
      textDecoration: 'underline',
      color: 'hsl(300, 99%, 64%)',
    },
    botao: {
      backgroundColor: '#f45bf4',
      color: 'white',
      padding: '15px 20px',
      border: '2px solid #6c4539',
      cursor: 'pointer',
      width: '60%',
      opacity: 0.8,
      fontSize: '20px',
      marginLeft: '20%',
      borderRadius: '50px',
    },
    botaoHover: {
      opacity: 1,
      backgroundColor: 'hsl(300, 99%, 64%)',
    },
  };
  
  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleLogin}>
        <h1 style={styles.h1}>Login</h1>
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Digite seu email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <label htmlFor="password"><b>Senha</b></label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <div>
          <a
            href="#"
            style={styles.esqueci_senha}
            onMouseOver={(e) => (e.target.style = styles.esqueci_senhaHover)}
            onMouseOut={(e) => (e.target.style = styles.esqueci_senha)}
          >
            Esqueci minha senha
          </a>
        </div>
        <button
          type="submit"
          style={styles.botao}
          onMouseOver={(e) => (e.target.style = styles.botaoHover)}
          onMouseOut={(e) => (e.target.style = styles.botao)}
        >
          Entrar
        </button>
        <button
          type="button"
          style={styles.botao}
          onClick={handleRegister}
          onMouseOver={(e) => (e.target.style = styles.botaoHover)}
          onMouseOut={(e) => (e.target.style = styles.botao)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );



};

export default LoginForm;
