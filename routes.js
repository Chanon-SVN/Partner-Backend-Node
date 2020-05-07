const routes = require('express').Router();
const partners = require('./partnerService')

routes.use('/partners', partners);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!'});
})


module.exports = routes;
