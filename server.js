const express = require('express');
const path = require('path');

const app = express();

// define folder for static files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// start server
app.listen(3000, () => {
    console.log('Spark listening on port 3000');
});
