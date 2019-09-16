const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create movies schema
const MovieSchema = new Schema({
  MovieName: {
    type: String,
    default: 'NO-NAME'
  },
  MovieReleaseYear: {
    type: String
  },
  Actors: {
    type: String,
    default: 'NO-NAME'
  },
  Producer: {
    type: String,
    default: 'NO-NAME'
  },
  posterUrl: {
    type: String,
    default:
      'https://x.kinja-static.com/assets/images/logos/placeholders/default.png'
  }
});

module.exports = Movie = mongoose.model('movies', MovieSchema);
