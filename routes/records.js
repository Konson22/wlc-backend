const express = require('express');
const { verifyToken } = require('../middlewares/jwt');
const { getAllRecordsController, addTruckRecordController, getAllTestRecordsController, checkOutController, clearController, } = require('../controllers/recordsController');

const router = express.Router()

router.get('/test', getAllTestRecordsController);
router.get('/', verifyToken, getAllRecordsController);
router.post('/add', verifyToken, addTruckRecordController);
router.post('/clear', verifyToken, clearController);
router.post('/check-out', verifyToken, checkOutController);

module.exports = router