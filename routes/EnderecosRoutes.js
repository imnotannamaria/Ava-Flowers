const express = require('express');
const router = express.Router();
const enderecosController = require('../controllers/EnderecosController');

const ValidarEndereco = require('../middlewares/ValidarEndereco');

router.post('/', ValidarEndereco, enderecosController.create);

router.get('/', enderecosController.index);

router.put('/:id', enderecosController.update);

router.delete('/:id', enderecosController.delete);

module.exports = router;
