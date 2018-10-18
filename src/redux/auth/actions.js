const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',


  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: (payload) => ({
    type: actions.LOGIN_REQUEST,
    payload
  }),
  logout: () => ({
    type: actions.LOGOUT
  }),

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  register: (user_register) => ({
    type: actions.REGISTER_REQUEST,
    user_register
  })
};
export default actions;
