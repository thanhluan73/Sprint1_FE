import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';
import authAction from 'redux/auth/actions';
import BlogHelper from 'helpers/blogHelper';
import notification from 'components/notification';

export function* Tag() {
  yield takeEvery(actions.LOAD_ALL_TAG_REQUEST, function* () {
    const response = yield call(BlogHelper.loadAllTag);
    if (response.result === 1) {
      yield put({ type: actions.LOAD_ALL_TAG_SUCCESS, tags: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_ALL_TAG_ERROR });
    }
  });

  yield takeEvery(actions.ADD_TAG_REQUEST, function* (data_action) {
    const data_tag = data_action.data_tag;
    const response = yield call(BlogHelper.addTag, data_tag);
    if (response.result === 1) {
      notification('success', 'success');
      yield put(push('/dashboard/tag/add-new'));
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.ADD_NEW_USER_ERROR });
    }
  });

  yield takeEvery(actions.CHANGE_TAG_REQUEST, function* (data_action) {
    const data_tag = data_action.data_tag;
    const response = yield call(BlogHelper.changeTag, data_tag);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.CHANGE_TAG_SUCCESS, data: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.CHANGE_TAG_ERROR });
    }
  });

  yield takeEvery(actions.DELETE_TAG_REQUEST, function* (data_action) {
    const id = data_action.id;
    const response = yield call(BlogHelper.deleteTag, id);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.DELETE_TAG_SUCCESS, id });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.DELETE_TAG_ERROR });
    }
  });
}


export function* Category() {
  yield takeEvery(actions.LOAD_ALL_CATEGORY_REQUEST, function* () {
    const response = yield call(BlogHelper.loadAllCategory);
    if (response.result === 1) {
      yield put({ type: actions.LOAD_ALL_CATEGORY_SUCCESS, categorys: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_ALL_CATEGORY_ERROR });
    }
  });

  yield takeEvery(actions.ADD_CATEGORY_REQUEST, function* (data_action) {
    const data = data_action.data;
    const response = yield call(BlogHelper.addCategory, data);
    if (response.result === 1) {
      notification('success', 'success');
      yield put(push('/dashboard/category/add-new'));
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.ADD_CATEGORY_ERROR });
    }
  });

  yield takeEvery(actions.CHANGE_CATEGORY_REQUEST, function* (data_action) {
    const data = data_action.data;
    const response = yield call(BlogHelper.changeCategory, data);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.CHANGE_CATEGORY_SUCCESS, data: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.CHANGE_CATEGORY_ERROR });
    }
  });

  yield takeEvery(actions.DELETE_CATEGORY_REQUEST, function* (data_action) {
    const id = data_action.id;
    const response = yield call(BlogHelper.deleteCategory, id);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.DELETE_CATEGORY_SUCCESS, id });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.DELETE_CATEGORY_ERROR });
    }
  });
}


export function* Post() {
  yield takeEvery(actions.LOAD_ALL_POST_REQUEST, function* () {
    const response = yield call(BlogHelper.loadAllPost);
    if (response.result === 1) {
      yield put({ type: actions.LOAD_ALL_POST_SUCCESS, posts: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_ALL_POST_ERROR });
    }
  });

  yield takeEvery(actions.LOAD_POST_TAG_REQUEST, function* (data_action) {
    const id = data_action.id;
    const response = yield call(BlogHelper.loadPostTags,id);
    if (response.result === 1) {
      yield put({ type: actions.LOAD_POST_TAG_SUCCESS, postTags: response.data });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.LOAD_POST_TAG_ERROR });
    }
  });

  yield takeEvery(actions.ADD_POST_REQUEST, function* (data_action) {
    const data = data_action.data;
    const response = yield call(BlogHelper.addPost, data);
    if (response.result === 1) {
      notification('success', 'success');
      yield put(push('/dashboard/post/add-new'));
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.ADD_POST_ERROR });
    }
  });

  yield takeEvery(actions.CHANGE_POST_REQUEST, function* (data_action) {
    const data = data_action.data;
    const response = yield call(BlogHelper.changePost, data);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.CHANGE_POST_SUCCESS, data: response.data, tags: data.tags });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.CHANGE_POST_ERROR });
    }
  });

  yield takeEvery(actions.DELETE_POST_REQUEST, function* (data_action) {
    const id = data_action.id;
    const response = yield call(BlogHelper.deletePost, id);
    if (response.result === 1) {
      notification('success', 'success');
      yield put({ type: actions.DELETE_POST_SUCCESS, id });
    } else if (response.result === 401) {
      yield put(authAction.logout());
    } else {
      notification('error', response.message);
      yield put({ type: actions.DELETE_POST_ERROR });
    }
  });
}


export default function* rootSaga() {
  yield all([
    fork(Tag),
    fork(Category),
    fork(Post),
  ]);
}
