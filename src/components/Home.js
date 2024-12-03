import React from 'react';
import backgroundImg from './img/Textura_Rosa.jpg';

const Home = () => {
  const abrirMenu = () => {
    document.getElementById('menu').style.width = '300px';
    document.getElementById('menu').style.boxShadow = '5px 0 15px rgba(0, 0, 0, 0.5)';
  };

  const fecharMenu = () => {
    document.getElementById('menu').style.width = '0';
    document.getElementById('menu').style.boxShadow = 'none';
  };

  const BodyStyle = {backgroundColor: '#FFC9E9'}

  const headerStyle = {
    backgroundImage: `url(${backgroundImg})`,
    minHeight: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: '#6c4539',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '0.5px solid #6c4539',
  };

  const logoStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%',
    marginRight: '20px',
    border: '2px solid #6c4539',
    cursor: 'pointer',
  };

  const menuStyle = {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: 1,
    top: '0',
    left: '0',
    backgroundColor: '#6c4539',
    color: '#fff',
    overflowX: 'hidden',
    transition: 'width 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '60px',
  };

  const linkStyle = {
    padding: '15px 20px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold',
    display: 'block',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: 'hsl(300, 99%, 64%)',
  };

  const fecharMenuStyle = {
    fontSize: '30px',
    position: 'absolute',
    top: '20px',
    right: '25px',
    cursor: 'pointer',
    color: 'white',
    transition: 'color 0.3s ease',
  };
 

  const imgPerfilStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%',
    transition: 'filter 0.3s ease',
    border: '2px solid #6c4539',
    alignItems: 'center',
    marginRight: '20px',
  };
  
  const imgStyle = {
    marginBottom: '10px',
    width: '300px',
    height: '300px',
    marginLeft: '20px',
    borderRadius: '20%',
  };

  const promocaoLugaresStyle = {
    marginTop: '50px',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
  };

  const footerStyle = {
    backgroundColor: '#b699f1',
    display: 'flex',
    color: '#6c4539',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '5px solid #6c4539',
  };

  return (
    <div style={BodyStyle}>
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
        &#9776;
    </span>

      <div className="perfil">
          <a href="perfil.html" id="perfilLink">
            <img className="img_perfil" style={imgPerfilStyle} src={require('./img/perfil.eu.jpg')} alt="eu" />
          </a>
        </div>

    </header>
      <div id="menu" style={menuStyle}>
        <span
          onClick={fecharMenu}
          style={fecharMenuStyle}
        >
          &times;
        </span>
        <a
          href="#imagens_passar"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          Início
        </a>
        <a
          href="meu_carinho.html"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          Meu Carrinho
        </a>
        <a
          href="campo_de_pesquisa.html"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          Pesquisar
        </a>
        <a
          href="agendamentos.html"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          Agendamentos
        </a>
        <a
          href="minha_loja.html"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          Minha Loja
        </a>
      </div>

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

export default Home;
