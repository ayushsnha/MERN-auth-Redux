import React from 'react';
import { Link } from 'react-router-dom';
import logo from './imdb.jpg'; // with import

export default function Landing() {
  return (
    <div style={{ height: '70vh' }} className='container valign-wrapper'>
      <div className='row'>
        <div className='col s12 center-align'>
          <h4>
            <b>IMDB</b> Clone App to Fetch and Edit Movie Details
          </h4>
          <img
            src={logo}
            style={{
              width: '140px'
            }}
            alt='imdb-logo'
          ></img>
          <p className='flow-text grey-text text-darken-1'>
            full-stack app with user authentication via passport and JWTs
          </p>
          <br />
          <div className='col s6'>
            <Link
              to='/register'
              style={{
                width: '140px',
                borderRadius: '3px',
                letterSpacing: '1.5px'
              }}
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'
            >
              Register
            </Link>
          </div>
          <div className='col s6'>
            <a
              href='/login'
              style={{
                width: '140px',
                borderRadius: '3px',
                letterSpacing: '1.5px'
              }}
              className='btn btn-large waves-effect waves-light hoverable  white black-text'
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
