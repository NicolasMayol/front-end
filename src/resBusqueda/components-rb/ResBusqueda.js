import React from 'react';
import Productos from './Productos';

const hashname = window.location.pathname;
const cad = hashname.slice(14)

const ResBusqueda = () => {
    return (
        <div className="section">
            <section>
                <header className="desBusqueda">
                        <p>{cad?cad : document.querySelector('.buscadorInput').value}</p>
                </header>
                <Productos/>
            </section>
        </div>
    );
};

export default ResBusqueda;