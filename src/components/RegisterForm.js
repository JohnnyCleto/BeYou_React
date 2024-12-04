import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar estados
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import backgroundImg from './img/background_img.jpg'; // Importa a imagem de fundo

// Componente funcional para o formulário de cadastro
const RegisterForm = () => {
  const navigate = useNavigate(); // Permite navegação programática entre páginas

  // Estado para gerenciar o hover no botão e os dados do formulário
  const [hovered, setHovered] = useState(false); // Controla o efeito visual no botão
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Atualiza o estado conforme o usuário digita nos campos
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e o valor do campo
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Atualiza apenas o campo alterado
  };

  // Valida e processa o envio do formulário
  const handleRegister = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.'); // Verifica se as senhas coincidem
      return;
    }
    alert('Cadastro realizado com sucesso!'); // Mensagem de sucesso
    navigate('/home'); // Redireciona para a página inicial
  };

  // Estilos inline para os elementos do formulário
  const styles = {
    background_img: {
      backgroundImage: `url(${backgroundImg})`, // Adiciona imagem de fundo
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',

    },
    formulario: {
      // Estilo do contêiner do formulário
      maxWidth: '400px',
      width: '90%',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #6c4539',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      right: '200px',
      color: 'black',
      textAlign: 'center',

    },
    label: {
      // Estilo das labels (texto descritivo dos campos)
      display: 'block',
      textAlign: 'left',
      marginBottom: '0px',
      marginTop: '0px',
      fontSize: '15px',
      color: '#6c4539',
      alignItems: 'center', 
    },

    input: {
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      borderRadius: '50px',
      backgroundColor: '#ffecfc',
    },
    
    botao: {
      backgroundColor: '#f45bf4',
      color: 'white',
      padding: '10px 20px',
      border: '2px solid #6c4539',
      cursor: 'pointer',
      width: '60%',
      borderRadius: '50px',
      opacity: hovered ? 1 : 0.8, // Altera opacidade no hover
    },
    link: { color: '#f45bf4', textDecoration: 'none', fontSize: '14px' },
  };

  // Estrutura do formulário
  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleRegister}>
        <h1>Cadastro</h1>

        {/* Campo para o nome */}
        <label htmlFor="name" style={styles.label}>
         <b> Nome:</b>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Campo para o e-mail */}
        <label htmlFor="email" style={styles.label}>
          E-mail:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Campo para a senha */}
        <label htmlFor="password" style={styles.label}>
           <b>Senha:</b>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Campo para confirmar a senha */}
        <label htmlFor="confirmPassword" style={styles.label}>
           <b>Confirme sua Senha:</b>
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Checkbox para os termos de uso */}
        <div>
          <input type="checkbox" id="concordo" required />
          <label htmlFor="concordo">
            <a href="/termos" style={styles.link}>Li e concordo com os termos de uso{' '}
            </a>
          </label>
        </div>

        {/* Botão para submeter o formulário */}
        <button
          type="submit"
          style={styles.botao}
          onMouseOver={() => setHovered(true)} // Efeito hover
          onMouseOut={() => setHovered(false)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
