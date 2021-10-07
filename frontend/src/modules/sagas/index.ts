import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import detailSaga from './detail';

function* rootSaga() {
  yield all([fork(postSaga), fork(detailSaga)]);
}

export default rootSaga;
