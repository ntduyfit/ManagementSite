const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.post('/:id', indexController.delete);

module.exports = router;