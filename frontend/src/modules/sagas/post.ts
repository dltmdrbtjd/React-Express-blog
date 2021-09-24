import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { loadPostAPI } from 'src/libs/api';
import { LOAD_POST_REQUEST } from '../action-types/post';
import { loadPostSuccess, loadPostFailure } from '../actions/post';

function* loadPostSaga() {
  try {
    const response = yield call(loadPostAPI);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    yield put(loadPostFailure());
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
}

function* postSaga() {
  yield all([fork(watchLoadPost)]);
}

export default postSaga;