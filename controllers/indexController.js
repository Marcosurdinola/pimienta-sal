const fs = require('fs');
const path = require('path');
const products = require('../data/products.json');

module.exports ={
    detalleMenu : (req, res) => res.render('detalleMenu', {
        products : products.find(product => product.id === +req.params.id)
       }),
    index : (req, res) => {
        res.render('index',{
            tittle: "Pimienta & Sal",
            products,
            images : "/principal.jpg"
        })
    }
}