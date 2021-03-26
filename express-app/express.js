const fetch = require("node-fetch");
const express = require("express");
const cors = require('cors');
const app = express();

let busqueda = [];
let articulos = {
    author: {
    name: "Nicolas",
    lastname: "Mayol"
    },
    categories: [],
    items: []
}

const fetchCategories = async () => {
    let data;
    let category;
    for(let i = 0; i < 4; i++){
        data = await fetch(`https://api.mercadolibre.com/categories/${busqueda[i].category_id}`);
        category = await data.json();
        articulos.categories.push(category.name);
    }
}

const fetchDescriptionID = async (userInput) => {
    let data;
    let description;

    data = await fetch(`https://api.mercadolibre.com/items/${userInput}/description`);
    description = await data.json();
    articulos.item.description = description.plain_text;
}

const makeResponse = () => {
    busqueda.forEach(busqItem => {
        articulos.items.push({
            id: busqItem.id,
            title: busqItem.title,
            price: {
                currency: busqItem.prices.prices.currency_id,
                amount: busqItem.price,
                decimals: (busqItem.price % 1).toFixed(4)
            },
            picture: busqItem.thumbnail,
            condition: busqItem.condition,
            free_shipping: busqItem.shipping.free_shipping
        })
    });
    console.log("Make Response ejecutada");
    console.log(articulos);
}

const makeResponseID = () => {
    articulos.item.id = busqueda.id;
    articulos.item.title = busqueda.title;
    articulos.item.price = {
            currency: busqueda.currency_id,
            amount: busqueda.price,
            decimals: (busqueda.price % 1).toFixed(4)
        };
    articulos.item.picture = busqueda.thumbnail;
    articulos.item.condition = busqueda.condition;
    articulos.item.free_shipping = busqueda.shipping.free_shipping;
    articulos.item.sold_quantity = busqueda.sold_quantity;

    console.log("Make Response ID ejecutada");
    console.log(articulos);
}

const fetchML = async (userInput) => {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${userInput}`);
    const busq = await res.json();

    busqueda = [];

    articulos = {
        author: {
        name: "Nicolas",
        lastname: "Mayol"
        },
        categories: [],
        items: []
    }

    for(let i = 0; i < 4; i++){
        busqueda.push(busq.results[i]);
    }

    await fetchCategories();
    makeResponse();
}

const fetchMLID = async (userInput) => {
    console.log('1')
    const res = await fetch(`https://api.mercadolibre.com/items/${userInput}`);
    const busq = await res.json();

    busqueda = null;

    articulos = {
        author: {
        name: "Nicolas",
        lastname: "Mayol"
        },
        item: {}
    }

    busqueda = busq;

    console.log('2')

    await fetchDescriptionID(userInput);
    makeResponseID();
}

//fetchML();

app.use(cors());

app.get('/', async (req, res, next) => {
    await fetchML(req.query.busqueda);
    next();
}, async (req, res) => {
    res.json(articulos);
});

app.get('/api/items', async (req, res, next) => {
    if(req.query.q) {
        await fetchML(req.query.q);
        next();
    }else if(req.query.id){ 
        await fetchMLID(req.query.id);
        next();
    }else{
        res.json("You should send 'q' or 'id' params");
    }
}, async (req, res) => {
    res.json(articulos);
});


app.listen(4000);