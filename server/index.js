require('../db/database');
require('dotenv').config();
const router = require('./router.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', router);

app.get(['/', '/home', '/about', '/services', '/help'], (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'), (err) => {
    (err) && res.status(500).send(err)
  })
})

app.listen(PORT, () => console.log(`Connected to PORT: ${PORT}`));