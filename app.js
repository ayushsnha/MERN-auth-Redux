const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const dev = app.get('env') !== 'production';
const users = require('./server/routes/api/users'); //('./routes/api/users');
const movies = require('./server/routes/api/movies');
//settings for production Environment
if (!dev) {
  app.disable('x-powered-by');
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));
}
//console.log(process.env.mongoURI);

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
//MONGO initialize

const db = process.env.mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// Movie.create({
//   MovieName: 'abcd2',
//   MovieRelease: 2016,
//   Actors: 'Varun dhawan, shradha kapoor',
//   Producer: 'prabhudeva'
// });
// Routes
app.use('/api/users', users);
app.use('/api/movies', movies);

if (!dev) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
