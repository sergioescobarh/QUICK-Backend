const express = require('express');
const router = express.Router();
const charactesController = require('../controllers/characters.controller');
//middleweare de api-key
const checkApiKey = require('../../middleweares/auth.handler')


router.get('/list', checkApiKey ,charactesController.list);

module.exports =router;