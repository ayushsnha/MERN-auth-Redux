import React from 'react';
import { connect } from 'react-redux';
import './Add.css';
import Modal from './Modal';
import Delete from './Delete';
class Card extends React.Component {
  renderCard = movie => {
    return (
      <div key={movie.MovieName + movie.posterUrl} className='col s6 m4 fix'>
        <div className='card'>
          <div className='card-image'>
            <img
              src={movie.posterUrl}
              style={{
                width: '1rm',
                height: '200px'
              }}
              alt='imdb-logo'
            />
            <span className='card-title'>{movie.MovieName.toUpperCase()}</span>
          </div>
          <div className='card-content'>
            <p className='title'>
              Movie Title: {movie.MovieName.toUpperCase()}
            </p>
            <p className='title'>
              Year of Release: {movie.MovieReleaseYear.slice(0, 4)}
            </p>
            <p>
              <strong>Actor(s):</strong> {movie.Actors}
            </p>
            <p>
              <strong>Producer:</strong> {movie.Producer}
            </p>
          </div>
          <div className='card-action'>
            {/* <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Edit
              <i className='material-icons right'>edit</i>
            </button> */}
            <Modal {...movie} />
            <Delete {...movie} />
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>{this.props.movies.map(this.renderCard)}</React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Card);
