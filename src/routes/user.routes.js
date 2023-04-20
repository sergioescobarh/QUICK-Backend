const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')

console.log(usersController);

//CRUD
router.get('/',(req,res)=>res.send('Hi users!!!'));
router.get('/list', usersController.show);
router.post('/register', usersController.register);

module.exports = router;