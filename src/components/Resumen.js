import PropTypes from "prop-types";
import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper'

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFFFFF;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, year, plan } = datos;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) }</li>
                <li>Plan: { primerMayuscula(plan) }</li>
                <li>Año del auto: { year }</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.shape({
        marca: PropTypes.any,
        plan: PropTypes.any,
        year: PropTypes.any
    })
}

export default Resumen
