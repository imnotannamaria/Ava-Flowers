const express = require ('express');
const router = express.Router();
const VendasController = require('../controllers/VendasController');

router.get('/', VendasController.index);

router.post('/' , VendasController.create);

router.put('/:id' , VendasController.update);

router.delete('/:id', VendasController.delete);

module.exports = router;

