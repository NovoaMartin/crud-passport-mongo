/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const configureDi = require('./config/di.js');
const { init: initAuthModule } = require('./modules/auth/module');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to mongo');
  })
  .catch(() => {
    console.log('Error connecting to mongo');
  });

const app = express();
const PORT = process.env.PORT || 3000;
const container = configureDi();

app.use(passport.initialize({ userProperty: 'user' }));
app.use(express.urlencoded());
app.use(express.json());

initAuthModule(app, container);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });
