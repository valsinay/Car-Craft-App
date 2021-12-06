const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const apiRouter = require('../controllers')

var bodyParser = require('body-parser')

module.exports = (app) => {

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(cookieParser());
    app.use('/api', apiRouter)
    app.use(express.json());

    app.use(express.static(path.resolve(__basedir, 'static')));

};