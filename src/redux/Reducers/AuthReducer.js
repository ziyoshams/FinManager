import { SET_CURRENT_USER } from '../Actions/AuthActions';

const defaultState = {
  currentUser: null,
  firstName: '',
  lastName: ''
};

export default function AuthReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
