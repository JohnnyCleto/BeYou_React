import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    navigate('/home');
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
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: 'rgba(251, 251, 251, 0.591)',
      color: 'black',
      border: 'solid 1px #6c4539',
      borderRadius: '30px',
      textAlign: 'center',
      position: 'absolute',
      right: '150px',
    },
    input: {
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10px',
    },
    checkboxInput: {
      marginRight: '8px',
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
      <form style={styles.formulario} onSubmit={handleRegister}>
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          required
          style={styles.input}
        />
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="concordo"
            required
            style={styles.checkboxInput}
          />
          <label htmlFor="concordo">
            Li e concordo com os{' '}
            <a href="/termos" style={{ color: '#f45bf4', textDecoration: 'none' }}>
              termos de uso
            </a>
          </label>
        </div>
        <button
          type="submit"
          style={styles.botao}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
