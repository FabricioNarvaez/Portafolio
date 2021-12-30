'use strict'
const { Router } = require('express');
const router = Router();
var appController = require('../controllers/index');

router.post('/send-email', appController.envioEmail);

module.exports = router;