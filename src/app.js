const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use('/', api);
app.use('/*', (req, res)=>{
    res.json({messages: 'hola'})
})

module.exports = app;