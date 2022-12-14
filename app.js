const express = require('express');

const app = express();

// Routes
const adminRoutes = require('./routes/adminRoutes');

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRoutes);

app.listen(8000);
