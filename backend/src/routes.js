const express = require('express');
const Empcontroller =  require('./Controllers/Empcontroller');
const Promocontroller =  require('./Controllers/Promocontroller');
const Sessioncontroller =  require('./Controllers/Sessioncontroller');
const Profilecontroller =  require('./Controllers/Profilecontroller');

const routes = express.Router();


routes.get('/emp', Empcontroller.index);
routes.post('/emp', Empcontroller.create);

routes.get('/promo', Promocontroller.index);
routes.post('/promo', Promocontroller.create);
routes.delete('/promo/:id', Promocontroller.delete);

routes.post('/sessions', Sessioncontroller.create);

routes.get('/profile', Profilecontroller.index);

module.exports = routes;
