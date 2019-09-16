import React from 'react';
import './Add.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addMovie } from '../redux/actions/movieAction';

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      MovieName: '',
      MovieReleaseYear: '',
      Actors: '',
      Producer: '',
      posterUrl: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newMovie = {
      MovieName: this.state.MovieName,
      MovieReleaseYear: this.state.MovieReleaseYear,
      Actors: this.state.Actors,
      Producer: this.state.Producer,
      posterUrl: this.state.posterUrl
    };
    console.log(newMovie);
    this.props.addMovie(newMovie, this.props.history);
  };

  render() {
    // if (this.state.redirect === true) {
    //   return <Redirect to='/dashboard' />;
    // }
    return (
      <div className='container'>
        <form noValidate className='z-depth-3' onSubmit={this.onSubmit}>
          <h3 className='center-align'>Add a New Movie</h3>
          <div className='row'>
            <div className='input-field col s4 offset-s4'>
              <input
                onChange={this.onChange}
                value={this.state.MovieName}
                id='MovieName'
                type='text'
              />
              <label htmlFor='MovieName'>Movie Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4 offset-s4'>
              <input
                onChange={this.onChange}
                value={this.state.Actors}
                id='Actors'
                type='text'
              />
              <label htmlFor='Actors'>Actors</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4 offset-s4'>
              <input
                onChange={this.onChange}
                value={this.state.Producer}
                id='Producer'
                type='text'
              />
              <label htmlFor='Producer'>Producer</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4 offset-s4'>
              <input
                onChange={this.onChange}
                value={this.state.posterUrl}
                id='posterUrl'
                type='text'
              />
              <label htmlFor='Producer'>Poster URL</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3 offset-s4'>
              <input
                onChange={this.onChange}
                value={this.state.MovieReleaseYear}
                id='MovieReleaseYear'
                type='date'
              />
              <label htmlFor='MovieReleaseYear'>Movie Release Year</label>
            </div>
          </div>
          <div className='row'>
            <div
              className='col s4 offset-s4'
              style={{ paddingLeft: '11.250px' }}
            >
              <button
                disabled={
                  !(
                    this.state.Actors &&
                    this.state.MovieName &&
                    this.state.Producer &&
                    this.state.MovieReleaseYear
                  )
                }
                style={{
                  width: '150px',
                  borderRadius: '3px'
                }}
                type='submit'
                className='btn btn-large waves-effect waves-light hoverable Green accent-3'
              >
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  addMovie: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMovie }
)(withRouter(Add));
