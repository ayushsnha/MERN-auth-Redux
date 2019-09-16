import { MOVIES } from '../constants';
import axios from 'axios';
export function loadMovies() {
  return function(dispatch) {
    fetch(`/api/movies/movie`).then(res => {
      if (res.ok) {
        res
          .json()

          .then(data => {
            dispatch({
              type: MOVIES.SUCCESS,
              payload: data
            });
          });
      } else {
        dispatch({
          type: MOVIES.LOAD_FAILED
        });
      }
    });
  };
}

export const addMovie = (newMovie, history) => dispatch => {
  axios
    .post('/api/movies/movie', newMovie)
    .then(res => {
      dispatch({
        type: MOVIES.ADD_SUCCESS
      });
      history.push('/dashboard');
    })
    .catch(err => {
      history.push('/Add');
      dispatch({
        type: MOVIES.ADD_FAILED
      });
    });
};

export const updateMovie = (updateMovie, id, history) => dispatch => {
  axios
    .post(`/api/movies/movie/update/${id}`, updateMovie)
    .then(res => {
      dispatch({
        type: MOVIES.UPDATE_SUCCESS,
        payload: res.data
      });
      history.push('/dashboard');
    })
    .catch(err => {
      history.push('/dashboard');
      dispatch({
        type: MOVIES.UPDATE_FAILED
      });
    });
};

export const deleteMovie = (id, history) => dispatch => {
  axios
    .post(`/api/movies/movie/delete/${id}`)
    .then(res => {
      dispatch({
        type: MOVIES.DELETE_SUCCESS,
        payload: id
      });
      history.push('/dashboard');
    })
    .catch(err => {
      history.push('/dashboard');
      dispatch({
        type: MOVIES.DELETE_FAILED
      });
    });
};
