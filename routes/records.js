const express = require('express');
const { verifyToken } = require('../middlewares/jwt');
const { getAllRecordsController, addTruckRecordController, getAllTestRecordsController, checkOutController, clearController, } = require('../controllers/recordsController');

const router = express.Router()

router.get('/test', getAllTestRecordsController);
router.post('/', getAllRecordsController);
router.post('/add', addTruckRecordController);
router.post('/clear', clearController);
router.post('/check-out', checkOutController);

module.exports = router