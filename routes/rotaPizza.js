const express = require('express');
const router = express.Router();

const pizzaController = require('../controllers/pizzaController');
router.get('/', pizzaController.index);

module.exports = router;