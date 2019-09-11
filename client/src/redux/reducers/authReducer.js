import { AUTH } from '../constants';
const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case AUTH.USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
