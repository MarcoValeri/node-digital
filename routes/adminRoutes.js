const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const adminController = require('../controllers/adminController');
const homeControllers = require('../controllers/homeControllers');

router.use('/admin/dashboard', adminController.adminDashboard);
router.use('/', homeControllers.home);

module.exports = router;
