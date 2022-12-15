const express = require('express');

// Express Router
const router = express.Router();

// Controllers
const articleControllers = require('../controllers/articleController');

router.use('/articles/:url', articleControllers.article);

module.exports = router;
