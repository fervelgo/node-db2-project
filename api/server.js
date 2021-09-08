const express = require("express");
const helmet = require('helmet');

const server = express();

const carRouter = require('./cars/cars-router');

server.use(express.json());
server.use('/api/cars', carRouter);
server.use(helmet());

module.exports = server
