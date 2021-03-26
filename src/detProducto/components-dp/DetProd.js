import React from 'react';

const DetProd = ({match}) => {

    const [item, setItem] = React.useState({});

    React.useEffect(()=>{
        getProd();
    }, []);

    const getProd = async () =>{
        let fetchUrl = `https://api.mercadolibre.com/items/${match.params.id}`;
        const data = await fetch(fetchUrl);
        const prod = await data.json();

        setItem(prod);
    }

    const [descrip, setDescrip] = React.useState ({});

    React.useEffect(() =>{
        getDesc();
    }, []);

    const getDesc = async () =>{
        let descUrl = `https://api.mercadolibre.com/items/${match.params.id}/description`;
        const data = await fetch(descUrl);
        const descProd = await data.json();

        setDescrip(descProd);
    }

    const [breadcrumb, setBreadcrumb] = React.useState ({});

    React.useEffect(() =>{
        getDescHead();
    }, []); 

    const getDescHead = async () =>{
        let desHead = `https://api.mercadolibre.com/items/${match.params.id}`;
        const data = await fetch(desHead);
        const descHead = await data.json();
        const cat = descHead.category_id;
        let catFetch = `https://api.mercadolibre.com/categories/${cat}`;
        const newdata = await fetch(catFetch);
        const descript = await newdata.json();

        setBreadcrumb(descript);
    }

    if (item.condition === "new") {
        document.querySelector('.condicion').value = "nuevo";
    }

    return (
        <div  className="section">
            <section>
                <header className="desBusqueda">
                        <p>{breadcrumb.path_from_root?breadcrumb.path_from_root[0].name:""} &gt; {breadcrumb.name}</p>
                </header>
                <div className="prod-det">
                    <article>
                        <div className="img">
                        <img src={item.pictures?item.pictures[0].url:item.thumbnail} />
                        </div>
                        <h2>Descripción del producto</h2>
                        <p>
                            {descrip.plain_text}
                        </p>
                    </article>
                    <aside>
                        <div className="aside">
                            <p className="condicion">{item.condition} - {item.sold_quantity} vendidos</p>
                            <h2 className="nombre">{item.title}</h2>
                            <p><span>${item.price}</span></p>
                            <button type="submit" className="comprar">Comprar</button>                    
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default DetProd;
