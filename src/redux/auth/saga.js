import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken } from 'helpers/utility';
import actions from './actions';
import AuthHelper from 'helpers/authHelper';
import notification from 'components/notification';

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function* (data_action) {
    const { payload } = data_action;
    const userInfo = payload.userInfo;
    const result = yield call(AuthHelper.login, userInfo);

    if (result.result === 1 && result.data.token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: result.data,
        token: result.data.token
      });
    } else {
      notification('error', result.message);
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function* (data_action) {
    yield localStorage.setItem('id_token', data_action.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function* () { });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* () {
    clearToken();
    yield put(push('/'));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
    const token = getToken().get('idToken');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile: 'Profile'
      });
    }
  });
}

export function* register() {
  yield takeEvery(actions.REGISTER_REQUEST, function* (data_action) {
    const user_register = data_action.user_register;
    const result = yield call(AuthHelper.register, user_register);
    if (result.result === 1) {
      yield put({
        type: actions.REGISTER_SUCCESS,
      });
      yield put(push('/'));
    } else {
      notification('error', result.message);
      yield put({ type: actions.REGISTER_ERROR });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    fork(register),
  ]);
}
