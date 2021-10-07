import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { DetailPostApi } from 'src/libs/api';
import { LOAD_DETAIL_REQUEST } from '../action-types/detail';
import { loadDetailSuccess, loadDetailFailure } from '../actions/detail';

function* detailPostSaga(action) {
  try {
    const { data } = yield call(DetailPostApi, action.data);
    yield put(loadDetailSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(loadDetailFailure());
  }
}

function* watchDetailPost() {
  yield takeLatest(LOAD_DETAIL_REQUEST, detailPostSaga);
}

function* detailSaga() {
  yield all([fork(watchDetailPost)]);
}

export default detailSaga;
