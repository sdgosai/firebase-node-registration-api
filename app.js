const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.json());
app.get('/', (req, res) => {
    res.send({
        message: 'Firebase auth'
    })
});

const ApiRoutes = require('./src/router/index.routes');
app.use('/api', ApiRoutes)

app.listen(PORT, () => {
    console.log('server is started on', PORT);
})