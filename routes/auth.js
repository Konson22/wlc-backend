const express = require('express');
const { authUser, loginUser, getAllUsers } = require('../controllers/auth');
const { verifyToken } = require('../middlewares/jwt');

const router = express.Router()

router.get('/', verifyToken, authUser);
router.get('/users', getAllUsers);
router.post('/login', loginUser);

module.exports = router