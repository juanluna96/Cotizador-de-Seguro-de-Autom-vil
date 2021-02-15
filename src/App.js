import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 60px auto;
`;

const ContendorFormulario = styled.div`
  background-color: #FFF;
  padding: 3em;
`

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
    </Contenedor>
  );
}

export default App;
