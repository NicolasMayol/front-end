import React from 'react';
import { Link } from 'react-router-dom';

var hashname = window.location.pathname;
var cad = hashname.slice(14);

const Productos = () =>{

        const [arrayProductos, setArrayProductos] = React.useState([]);

        React.useEffect(() =>{
            productosdatos();
            testNode();
        }, [])

        const testNode = async () =>{
            const data = await fetch (`http://localhost:4000?busqueda=${document.querySelector(".buscadorInput").value?document.querySelector(".buscadorInput").value: cad}`);
            const datos = await data.json();
            console.log(datos);
        };

        const productosdatos = async () =>{
            const datos = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${document.querySelector('.buscadorInput').value?document.querySelector('.buscadorInput').value: cad }`);
            const datosProd = await datos.json();
            let arrayTemporal = [];

            for (let index = 0; index < 4; index++) {
                arrayTemporal.push(datosProd.results[index])
            }
            setArrayProductos(arrayTemporal); 
        }
    return(
        <div className="productos"> 
           {
            arrayProductos.map((results) => (
                <div className="prod">
                <Link to={`/items/${results.id}`}>
                <article className="product" id={results.id}>
                    <div className="imgProd">
                        <img src={results.thumbnail}/>
                    </div>
                    <p className="contProd"><span className="precio">${results.price}{results.shipping.free_shipping && <div className="carship"/>}
                    </span>   
                    <br/>
                    {results.title}
                    <br/>
                    {results.condition}</p>
                    <p className="ubicacion">{results.address.city_name}</p>
                </article>
                </Link>
                </div> ))
           }
           </div>
    );
}

export default Productos;
