import { MOVIES } from '../constants';
import merge from 'lodash/merge';

export default function(state = [], action) {
  switch (action.type) {
    case MOVIES.SUCCESS:
      return [...action.payload];
    case MOVIES.UPDATE_SUCCESS:
      return merge([], state, action.payload);
    case MOVIES.DELETE_SUCCESS:
      // console.log(action.payload);
      return state.filter(({ _id }) => _id !== action.payload);
    case MOVIES.LOAD_FAILED:
      return {
        ...state,
        movies: []
      };
    default:
      return state;
  }
}
