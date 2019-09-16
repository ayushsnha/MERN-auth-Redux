import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateMovie } from '../redux/actions/movieAction';

class Modal extends Component {
  constructor(props) {
    super(props);
    // console.log(props.MovieName);
    this.state = {
      MovieName: this.props.MovieName,
      MovieReleaseYear: this.props.MovieReleaseYear,
      Actors: this.props.Actors,
      Producer: this.props.Producer,
      posterUrl: this.props.posterUrl
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onUpdate = e => {
    e.preventDefault();
    const updateMovie = {
      MovieName: this.state.MovieName,
      MovieReleaseYear: this.state.MovieReleaseYear,
      Actors: this.state.Actors,
      Producer: this.state.Producer,
      posterUrl: this.state.posterUrl
    };
    //console.log(updateMovie);
    this.props.updateMovie(updateMovie, this.props._id, this.props.history);
  };

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 0,
      outDuration: 0,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%'
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <button
          className=' btn modal-trigger'
          data-target={`modal1 + ${this.props._id}`}
        >
          <i className='material-icons right'>edit</i>
          Edit
        </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={`modal1 + ${this.props._id}`}
          className='modal'
        >
          <div className='modal-content'>
            <h4>Edit Movie Details</h4>
            <div className='row'>
              <form noValidate className='col s12' onSubmit={this.onUpdate}>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      onChange={this.onChange}
                      value={this.state.MovieName}
                      id='MovieName'
                      type='text'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      onChange={this.onChange}
                      value={this.state.Actors}
                      id='Actors'
                      type='text'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      onChange={this.onChange}
                      value={this.state.Producer}
                      id='Producer'
                      type='text'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      onChange={this.onChange}
                      value={this.state.posterUrl}
                      id='posterUrl'
                      type='text'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      onChange={this.onChange}
                      value={this.state.MovieReleaseYear}
                      id='MovieReleaseYear'
                      type='date'
                    />
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    onSubmit={this.onSubmit}
                    className=' modal-action modal-close waves-effect waves-green btn-flat'
                    type='submit'
                  >
                    SAVE
                    <i className='material-icons right'>delete</i>
                  </button>
                  <a
                    href='/dashboard'
                    className=' modal-action modal-close waves-effect waves-green btn-flat'
                  >
                    DISCARD
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateMovie }
)(withRouter(Modal));
//export default Modal;
