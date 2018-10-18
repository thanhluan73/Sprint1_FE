import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// import { getToken, clearToken } from 'helpers/utility';
import actions from './actions';
import authAction from 'redux/auth/actions';
import UserHelper from 'helpers/userHelper';
import notification from 'components/notification';

export function* loadAllUser() {
  yield takeEvery(actions.LOAD_ALL_USER_REQUEST, function* () {
    const response = yield call(UserHelper.loadAllUser);
    if (response.result === 1) {
      yield put({ type: actions.LOAD_ALL_USER_SUCCESS, users: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_ALL_USER_ERROR });
    }
  });
}

export function* loadRoleByUserId() {
  yield takeEvery(actions.LOAD_ROLE_BY_USER_ID_REQUEST, function* (data_action) {
    const user_id = data_action.user_id;

    const response = yield call(UserHelper.loadRoleByUserId, user_id);

    if (response.result === 1) {
      yield put({ type: actions.LOAD_ROLE_BY_USER_ID_SUCCESS, role: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_ALL_USER_ERROR });
    }
  });
}

export function* addNewUser() {
  yield takeEvery(actions.ADD_NEW_USER_REQUEST, function* (data_action) {
    const data_user = data_action.data_user;
    const response = yield call(UserHelper.addNewUser, data_user);
    if (response.result === 1) {
      notification('success', 'success');
      yield put(push('/dashboard/user/add-new'));
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.ADD_NEW_USER_ERROR });
    }
  });
}

export function* changeProfile() {
  yield takeEvery(actions.CHANGE_PROFILE_REQUEST, function* (data_action) {
    const data_user = data_action.data_user;
    const response = yield call(UserHelper.changeProfile, data_user);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.CHANGE_PROFILE_SUCCESS });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.CHANGE_PROFILE_ERROR });
    }
  });
}

export function* deteleUser() {
  yield takeEvery(actions.DELETE_USER_REQUEST, function* (data_action) {
    const id = data_action.user_id;
    const response = yield call(UserHelper.deleteUser, id);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.DELETE_USER_SUCCESS, id });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.DELETE_USER_ERROR });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(loadAllUser),
    fork(loadRoleByUserId),
    fork(addNewUser),
    fork(changeProfile),
    fork(deteleUser),
  ]);
}
