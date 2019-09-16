const express = require('express');
const router = express.Router();
const Movies = require('../../models/movies');

//GET ROUTE

router.get('/movie', (req, res) => {
  Movies.find({}, null, { sort: { _id: -1 } }, (err, movies) => {
    if (err) res.send(err);
    else res.send(movies);
  });
});

// router.get('/movie/edit/:id', (req, res) => {
//   let id = req.params.id;
//   Movies.findById(id, function(err, movie) {
//     res.json(movie);
//   });
// });

//UPDATE ROUTE

router.post('/movie/update/:id', (req, res) => {
  Movies.findById(req.params.id, function(err, movie) {
    if (!movie) res.status(404).send('data is not found');
    else {
      movie.MovieName = req.body.MovieName;
      movie.MovieReleaseYear = req.body.MovieReleaseYear;
      movie.Actors = req.body.Actors;
      movie.Producer = req.body.Producer;
      movie.posterUrl = req.body.posterUrl;
      movie
        .save()
        .then(movie => {
          res.json([movie]);
        })
        .catch(err => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

//ADD ROUTE

router.post('/movie', (req, res) => {
  Movies.create(
    {
      MovieName: req.body.MovieName,
      MovieReleaseYear: req.body.MovieReleaseYear,
      Actors: req.body.Actors,
      Producer: req.body.Producer,
      posterUrl: req.body.posterUrl
        ? req.body.posterUrl
        : 'https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
    },
    (err, newMovie) => {
      if (err) {
        res.send('success');
      } else {
        res.send('fail');
      }
    }
  );
});

//DELETE ROUTE

router.post('/movie/delete/:id', (req, res) => {
  Movies.findByIdAndRemove({ _id: req.params.id }, function(err, movie) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = router;
