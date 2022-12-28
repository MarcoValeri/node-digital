const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const adminController = require('../controllers/adminController');

router.use('/admin/dashboard', adminController.adminDashboard);
router.use('/admin/articles', adminController.adminArticles);
router.use('/admin/add-new-article', adminController.adminNewArticle);

module.exports = router;
