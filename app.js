const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const users = require('./server/routes/api/users'); //('./routes/api/users');

console.log(process.env.mongoURI);

//bodyParser middleware config
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./server/config/passport')(passport);
// Routes
app.use('/api/users', users);

const db = process.env.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
