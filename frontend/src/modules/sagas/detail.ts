import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { DetailPostApi } from 'src/libs/api';
import { LOAD_DETAIL_REQUEST } from '../action-types/detail';
import { loadDetailSuccess, loadDetailFailure } from '../actions/detail';

function* detailPostSaga() {
  try {
    const response = yield call(DetailPostApi);
  } catch (error) {
    console.log(error);
  }
}
