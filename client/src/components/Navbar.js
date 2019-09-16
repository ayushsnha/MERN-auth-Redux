import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-fixed'>
      <nav className='z-depth-1'>
        <div className='nav-wrapper white'>
          <Link
            to='/'
            style={{
              fontFamily: 'monospace'
            }}
            className='col s5 brand-logo center black-text'
          >
            <i className='material-icons'>IMDB</i>
            Clone
          </Link>
        </div>
      </nav>
    </div>
  );
}
