const express = require ('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriasController');


router.get('/', CategoriaController.index);

router.post('/', CategoriaController.create);

router.put ('/:id', CategoriaController.update);

router.delete ('/:id', CategoriaController.delete);

module.exports = router;