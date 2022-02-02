const { register } = require('../controller/firebaseControler');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send({
        message: 'firebase routes'
    })
});


routes.post('/register', register)
// routes.post('/login', login)


module.exports = routes