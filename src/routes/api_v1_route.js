const { user_router } = require('./User.Route');
const { errorHandlerMiddleware } = require('../Middlewares/ErrorHandler.Middleware');

const api_v1_router = require('express').Router();


// todo: handle req.body sanitization
api_v1_router.use('/users', user_router);
api_v1_router.use(errorHandlerMiddleware);

module.exports = { api_v1_router };
