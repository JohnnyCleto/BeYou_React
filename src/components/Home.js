import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/Textura_Rosa.jpg'; // Importa a imagem de fundo para o cabeçalho

// Componente principal da página inicial
const Home = () => {
  // Função para abrir o menu lateral
  const abrirMenu = () => {
    document.getElementById('menu').style.width = '300px'; // Define a largura do menu
    document.getElementById('menu').style.boxShadow = '5px 0 15px rgba(0, 0, 0, 0.5)'; // Adiciona sombra ao menu
  };

  // Função para fechar o menu lateral
  const fecharMenu = () => {
    document.getElementById('menu').style.width = '0'; // Reduz a largura do menu para zero
    document.getElementById('menu').style.boxShadow = 'none'; // Remove a sombra
  };

  // Estilo para o corpo da página
  const BodyStyle = { backgroundColor: '#FFC9E9' };

  // Estilo para o cabeçalho
  const headerStyle = {
    backgroundImage: `url(${backgroundImg})`, // Define a imagem de fundo
    minHeight: '100%', // Altura mínima do cabeçalho
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: '#6c4539', // Cor do texto
    padding: '20px', // Espaçamento interno
    display: 'flex', // Define layout flex para o cabeçalho
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '0.5px solid #6c4539', // Borda ao redor do cabeçalho
  };

  // Estilo para o logo no cabeçalho
  const logoStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%', // Deixa o logo redondo
    marginRight: '20px',
    border: '2px solid #6c4539', // Adiciona borda ao logo
    cursor: 'pointer', // Cursor tipo "mão" ao passar sobre o logo
  };

  // Estilo para o menu lateral
  const menuStyle = {
    height: '100%', // Ocupa toda a altura da tela
    width: '0', // Largura inicial como 0 (fechado)
    position: 'fixed', // Menu fica fixo no lado esquerdo
    zIndex: 1, // Garante que o menu fique acima de outros elementos
    top: '0',
    left: '0',
    backgroundColor: '#6c4539', // Cor de fundo do menu
    color: '#fff',
    overflowX: 'hidden', // Esconde o conteúdo horizontal se necessário
    transition: 'width 0.4s ease-in-out, box-shadow 0.4s ease-in-out', // Animação para abrir/fechar o menu
    display: 'flex',
    flexDirection: 'column', // Coloca os links em coluna
    paddingTop: '60px',
  };

  // Estilo base para os links no menu
  const linkStyle = {
    padding: '15px 20px',
    textDecoration: 'none', // Remove sublinhado
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold',
    display: 'block',
    transition: 'color 0.3s ease', // Animação de mudança de cor ao passar o mouse
  };

  // Estilo ao passar o mouse sobre os links
  const linkHoverStyle = {
    color: 'hsl(300, 99%, 64%)', // Nova cor ao passar o mouse
  };

  // Estilo para o botão de fechar o menu
  const fecharMenuStyle = {
    fontSize: '30px',
    position: 'absolute',
    top: '20px',
    right: '25px',
    cursor: 'pointer',
    color: 'white',
    transition: 'color 0.3s ease', // Transição suave ao passar o mouse
  };

  // Estilo para a imagem do perfil no cabeçalho
  const imgPerfilStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%', // Imagem de perfil arredondada
    transition: 'filter 0.3s ease', // Transição suave para filtros
    border: '2px solid #6c4539',
    alignItems: 'center',
    marginRight: '20px',
  };

  // Estilo para as imagens de promoções
  const imgStyle = {
    marginBottom: '10px',
    width: '300px',
    height: '300px',
    marginLeft: '20px',
    borderRadius: '20%', // Bordas arredondadas
  };

  // Estilo para contêineres de promoções
  const promocaoLugaresStyle = {
    marginTop: '50px',
    overflow: 'auto', // Permite rolagem horizontal
    whiteSpace: 'nowrap', // Mantém as imagens em uma linha
    scrollbarWidth: 'none', // Remove a barra de rolagem visível
  };

  // Estilo para o rodapé
  const footerStyle = {
    backgroundColor: '#b699f1', // Cor de fundo
    display: 'flex', // Layout flex
    color: '#6c4539',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '5px solid #6c4539', // Borda do rodapé
  };

  return (
    <div style={BodyStyle}>
      {/* Cabeçalho com logo, menu toggle e perfil */}
      <header style={headerStyle}>
        <img
          id="logoLink"
          style={logoStyle}
          src={require('./img/logo_fio_roxo.jpg')}
          alt="Logo"
        />
        <span
          className="menuToggle"
          onClick={abrirMenu}
          style={{
            fontSize: '30px',
            cursor: 'pointer',
            color: '#6c4539',
            position: 'absolute',
            right: 140,
          }}
        >
          &#9776; {/* Ícone do menu lateral */}
        </span>

        <div className="perfil">
          <a href="perfil.html" id="perfilLink">
            <img
              className="img_perfil"
              style={imgPerfilStyle}
              src={require('./img/perfil.eu.jpg')}
              alt="Perfil"
            />
          </a>
        </div>
      </header>

      {/* Menu lateral */}
      <div id="menu" style={menuStyle}>
        <span onClick={fecharMenu} style={fecharMenuStyle}>
          &times; {/* Ícone para fechar o menu */}
        </span>
        {/* Links do menu lateral */}
        {['Início', 'Meu Carrinho', 'Pesquisar', 'Agendamentos', 'Minha Loja'].map((item, index) => (
          <a
            key={index}
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Seções principais */}
      <main>
        <div className="promocao_lugares" style={promocaoLugaresStyle}>
          <h1>Promoções de Serviços</h1>
          <img className="img1" style={imgStyle} src={require('./img/promocao1.jpg')} alt="alongamento_unha" />
          <img className="img2" style={imgStyle} src={require('./img/promocao2.jpg')} alt="progressiva" />
          <img className="img3" style={imgStyle} src={require('./img/promocao3.jpeg')} alt="corte" />
          <img className="img4" style={imgStyle} src={require('./img/promoçao4.jpg')} alt="tranças" />
          <img className="img5" style={imgStyle} src={require('./img/promocao5.jpeg')} alt="massagem" />
        </div>

        <div className="promocao_produtos" style={promocaoLugaresStyle}>
          <h1>Promoções de Produtos</h1>
          <img className="img1" style={imgStyle} src={require('./img/promocao_produto1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/promocao_produto2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/promocao_produto3.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/Promocao_produto4.jpg')} alt="" />
        </div>

        <div className="logos_empresas" style={promocaoLugaresStyle}>
          <h1>Lojas em destaque</h1>
          <img className="img1" style={imgStyle} src={require('./img/loja1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/loja2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/loja3.jpg')} alt="" />
          <img className="img4" style={imgStyle} src={require('./img/loja4.jpg')} alt="" />
          <img className="img5" style={imgStyle} src={require('./img/loja5.jpg')} alt="" />
          <img className="img6" style={imgStyle} src={require('./img/loja6.jpg')} alt="" />
          <img className="img7" style={imgStyle} src={require('./img/loja7.jpg')} alt="" />
        </div>

        <div className="voce_sabia" style={promocaoLugaresStyle}>
          <h1>Você sabia...?</h1>
          <img className="img1" style={imgStyle} src={require('./img/voce_sabia1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/voce_sabia2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/voce_sabia3.jpg')} alt="" />
          <img className="img4" style={imgStyle} src={require('./img/voce_sabia4.jpg')} alt="" />
          <img className="img5" style={imgStyle} src={require('./img/voce_sabia5.jpg')} alt="" />
        </div>
      </main>

      <footer style={footerStyle}>
        <div className="footer"></div>
      </footer>
    </div>
  );
};

export default Home; // Exporta o componente para ser utilizado em outros arquivos