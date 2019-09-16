import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteMovie } from '../redux/actions/movieAction';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.deleteMovie(this.props._id, this.props.history);
  };
  render() {
    // console.log(this.props);
    return (
      <button
        onClick={this.onSubmit}
        className='btn  waves-light'
        type='submit'
        name='action'
      >
        Delete
        <i className='material-icons right'>delete</i>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { deleteMovie }
)(withRouter(Delete));
