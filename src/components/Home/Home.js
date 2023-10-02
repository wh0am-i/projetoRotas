import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
/*
      <h1>Página Inicial</h1>
      <div className='center'>
        <div className='sobre'>
          <Link to="./sobre">Sobre</Link>
        </div>
        <div className='Usuario'>
          <Link to="./usuario">Usuario</Link>
        </div>
      </div>
*/
const Home = () => {
  return (
    <div className="Home">
      <h1>ASTRAIOS</h1>
      <Link to="./sobre" className='link'>Saiba Mais</Link>
    </div>
  );
}

export default Home;