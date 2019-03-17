const express = require('express');
const parser = require('body-parser');
const path = require('path');
const http = require('http');
const api = require('./server/routes/api');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist/codepost')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/codepost/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Rest server is running at ${port}`));
