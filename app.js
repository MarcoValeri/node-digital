const express = require('express');
const path = require('path');

const app = express();

// DB TEST DELETE IT START

// const db = require('./util/database');
// db.execute('SELECT * FROM articles')
//     .then(row => {
//         console.log(row);
//     })
//     .catch(err => console.log(err));

// DB TEST DELETE IT END

// Routes
const adminRoutes = require('./routes/adminRoutes');
const articleRoutes = require('./routes/articleRoutes');
const homeRoutes = require('./routes/homeRoutes');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(adminRoutes);
app.use(articleRoutes);
app.use(homeRoutes);

app.listen(8000);
