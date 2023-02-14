const express = require('express');
const { getVisitors, registerVisitor, getVisitorsTest } = require('../controllers/visitors');
const { verifyToken } = require('../middlewares/jwt');

const router = express.Router()

router.get('/test', getVisitorsTest);
router.get('/', verifyToken, getVisitors);
router.post('/', verifyToken, registerVisitor);

module.exports = router