import React from 'react';
import { Link } from 'react-router-dom';

import './Sobre.css';

const Sobre = () => {
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Sobre;