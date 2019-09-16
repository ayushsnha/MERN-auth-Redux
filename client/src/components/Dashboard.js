import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { loadMovies } from '../redux/actions/movieAction';
import Card from './Card';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      reload: false
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    this.props.loadMovies();
    this.setState = {
      relaod: true
    };
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className='container valign-wrapper'>
        <div className='row'>
          <div className='col s4  offset-s10'>
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '10px'
              }}
              onClick={this.onLogoutClick}
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'
            >
              Logout
            </button>
          </div>
          <div className='col s12 center-align'>
            <h4>
              <b>Welcome,</b> {user.name.split(' ')[0]}
              <p className='flow-text grey-text text-darken-1'>
                You are logged into{' '}
                <span style={{ fontFamily: 'monospace' }}>IMDB-Clone</span> App
              </p>
              <Link
                to='/Add'
                style={{
                  width: '250px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px'
                }}
                className='btn btn-large waves-effect waves-light hoverable orange accent-3'
              >
                <i className='material-icons left'>add</i>
                Add a NEW Movie
              </Link>
            </h4>
          </div>
          <Card />
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  movies: state.movies
});
export default connect(
  mapStateToProps,
  { logoutUser, loadMovies }
)(Dashboard);
