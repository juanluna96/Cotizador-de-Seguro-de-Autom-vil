import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 60px auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3em;
`

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
      <ContenedorFormulario>
        <Formulario></Formulario>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
