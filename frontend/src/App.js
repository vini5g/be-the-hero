import React, { useState } from 'react';

import './global.css';

import Routes from './routes';


// JSX (Javascript XML)
// componente e uma funcao que retorna hmtl
// propriedades sao atributos dentro de componentes
// estado: informacao contida pelo componente
// imutabilidade: sobrepor uma variavel com o use state

function App(){
    return(
        <Routes />
    );
}

export default App;