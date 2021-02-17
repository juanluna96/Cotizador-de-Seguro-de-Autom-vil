import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
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

  const [resumen, setResumen] = useState({});
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
      <ContenedorFormulario>
        <Formulario setResumen={ setResumen }></Formulario>
        {
          datos
            ? <Resumen datos={ datos }></Resumen>
            : null
        }
        <Resultado cotizacion={ cotizacion }></Resultado>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
