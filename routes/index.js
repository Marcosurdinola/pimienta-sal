var express = require('express');
var router = express.Router();

const {index, detalleMenu, products} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.get('/detalle/:id', detalleMenu)

module.exports = router;
