import actions from './actions';

const initState = { users: [] };

export default function adminUserReducer(state = initState, action) {

  switch (action.type) {
    case actions.LOAD_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      }; 

    case actions.LOAD_ALL_USER_ERROR:
      return {
        initState
      }

    case actions.LOAD_ROLE_BY_USER_ID_SUCCESS:
      return {
        ...state,
        role: action.role
      };

    case actions.ADD_NEW_USER_SUCCESS:
      return {
        initState
      }
    default:
      return state;
  }
}
