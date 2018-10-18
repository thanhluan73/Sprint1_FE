import actions from './actions';

const initState = { idToken: null };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, idToken: action.token };
    case actions.LOGOUT:
      return initState;

    case actions.REGISTER_SUCCESS:
      return { ...state };
    case actions.REGISTER_ERROR:
      return { ...state };
    default:
      return state;
  }
}
