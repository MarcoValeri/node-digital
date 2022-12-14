const express = require('express');

const app = express();

app.use('/admin', (req, res, next) => {
    res.send('Hello Node');
})

app.listen(8000);
