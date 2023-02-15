const express = require('express');
const { verifyToken } = require('../middlewares/jwt');
const { getAllGatepasses } = require('../controllers/gatepasses');

const router = express.Router();

router.get('/', getAllGatepasses);

module.exports = router