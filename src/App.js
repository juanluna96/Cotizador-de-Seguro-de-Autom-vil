import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
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

  const [cargando, setCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
      <ContenedorFormulario>
        <Formulario setResumen={ setResumen } setCargando={ setCargando }></Formulario>
        { cargando ? <Spinner></Spinner> : null }
        {
          datos
            ? <Resumen datos={ datos }></Resumen>
            : null
        }
        { !cargando
          ? <Resultado cotizacion={ cotizacion }></Resultado>
          : null
        }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
