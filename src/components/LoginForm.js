import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);

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
    background_img: {
      backgroundImage: `url(${backgroundImg})`,
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formulario: {
      position: 'absolute',
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: 'rgba(251, 251, 251, 0.591)',
      color: 'black',
      border: 'solid 1px #6c4539',
      borderRadius: '30px',
      textAlign: 'center',
    },
    input: {
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
    },
    botao: {
      backgroundColor: '#f45bf4',
      color: 'white',
      padding: '10px 20px',
      border: 'solid 2px #6c4539',
      cursor: 'pointer',
      width: '60%',
      fontSize: '16px',
      borderRadius: '50px',
      marginTop: '10px',
      opacity: hovered ? 1 : 0.8,
    },
  };

  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.botao}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Entrar
        </button>
        <button
          type="button"
          style={styles.botao}
          onClick={handleRegister}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
