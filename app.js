const express = require('express');
const path = require('path');

const app = express();

// Routes
const adminRoutes = require('./routes/adminRoutes');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRoutes);

app.listen(8000);
