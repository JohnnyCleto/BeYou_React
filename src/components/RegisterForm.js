import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importação correta do useNavigate

const styles = {
  global: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: 0,
    boxSizing: 'border-box',
  },
  backgroundImg: {
    backgroundImage: 'url(/img/background_img.jpg)', // Caminho relativo à pasta public
    minHeight: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
  },
  formulario: {
    position: 'absolute',
    right: 0,
    margin: '35px 150px 35px 35px',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #6c4539',
  },
  h1: {
    marginBottom: '10px',
  },
  input: {
    width: '95%',
    padding: '15px',
    margin: '5px 0 10px 0',
    border: '1px solid #6c4539',
    backgroundColor: '#ffecfc',
    borderRadius: '50px',
  },
  inputFocus: {
    backgroundColor: '#ffecfc',
    outline: 'none',
  },
  checkbox: {
    color: '#f45bf4',
    fontStyle: 'none',
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
  },
  checkboxInput: {
    marginTop: '10px',
    marginRight: '2px',
  },
  checkboxLabel: {
    fontSize: '15px',
  },
  checkboxLink: {
    color: '#f45bf4',
    textDecoration: 'none',
  },
  checkboxLinkHover: {
    textDecoration: 'underline',
    color: 'hsl(300, 99%, 64%)',
  },
  botaoCadastrar: {
    backgroundColor: '#f45bf4',
    color: 'white',
    padding: '15px 20px',
    border: '2px solid #6c4539',
    cursor: 'pointer',
    width: '60%',
    opacity: 0.8,
    fontSize: '20px',
    marginTop: '15px',
    marginLeft: '90px',
    borderRadius: '50px',
  },
  botaoCadastrarHover: {
    opacity: 1,
    backgroundColor: 'hsl(300, 99%, 64%)',
  },
};

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.backgroundImg}>
      <form style={styles.formulario}>
        <h1 style={styles.h1}>Cadastro</h1>

        <label htmlFor="nome"><b>Nome</b></label>
        <input
          type="text"
          placeholder="Digite seu nome"
          name="nome"
          required
          style={styles.input}
        />

        <label htmlFor="email"><b>E-mail</b></label>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          name="email"
          required
          style={styles.input}
        />

        <label htmlFor="psw"><b>Senha</b></label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="psw"
          required
          style={styles.input}
        />

        <label htmlFor="psw-confirm"><b>Confirmar Senha</b></label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          name="psw-confirm"
          required
          style={styles.input}
        />

        <div style={styles.checkbox}>
          <input
            type="checkbox"
            id="concordo"
            name="concordo"
            required
            style={styles.checkboxInput}
          />
          <label htmlFor="concordo" style={styles.checkboxLabel}>
            Li e concordo com os <a href="#" style={styles.checkboxLink}>termos de uso</a>
          </label>
        </div>

        <button
          type="button"
          style={styles.botaoCadastrar}
          onClick={() => navigate('/home')}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
