import { combineReducers } from 'redux';

import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { postRedcuer } from './post';
import { detailReducer } from './detail';

export const history = createBrowserHistory();

export default combineReducers({
  post: postRedcuer,
  detail: detailReducer,
  router: connectRouter(history),
});
