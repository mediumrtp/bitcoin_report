const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const path = require('path');
const auth = require('http-auth');
const app = require('../app');
const console = require('console');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
    // myController.getData();
    res.render('index');
});

router.get('/report', (req, res) => {
    res.render('report');
});

module.exports = router;