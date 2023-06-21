const express = require('express');

const router = express.Router();

const userController = require('../controllers/user')

router.post('/user/add-user', userController.postuserData);

router.get('/user/add-user', userController.getUserData);

router.use('/user/delete-user/:productId', userController.deleteUserData)
module.exports = router;