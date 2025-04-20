const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


//solicitud de tipó get (Ectraer) en la URL
router.get('/', (req, res) => productController.getProducts(req, res));
//solicitud de tipó get (Ectraer) en la URL
router.get('/:id', (req, res) => productController.getProductById(req, res));

//solicitud de tipo post (Agregar)en la URL
router.post('/', (req, res) => productController.createProduct(req, res));
//solicitud de tipo put (Actualizar)en la URL
router.put('/:id', (req, res) => productController.updateProduct(req, res));
//Solicitud de tipo delete (Eliminar)en la URL
router.delete('/:id', (req, res) => productController.deleteProduct(req, res));

module.exports = router;