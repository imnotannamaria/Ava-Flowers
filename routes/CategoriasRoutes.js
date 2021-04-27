const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriasController');
const ValidarCategoria = require('../middlewares/ValidarCategoria');

router.get('/', CategoriaController.index);

router.post('/', ValidarCategoria, CategoriaController.create);

router.put('/:id', CategoriaController.update);

router.delete('/:id', CategoriaController.delete);

module.exports = router;
