import React, { Fragment } from 'react';

const Resumen = ({ datos }) => {

    return (
        <Fragment>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan:</li>
                <li>Año del auto: </li>
            </ul>
        </Fragment>
    )
}

export default Resumen
