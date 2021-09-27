import { combineReducers } from 'redux';

import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { postRedcuer } from './post';

export const history = createBrowserHistory();

export default combineReducers({
  post: postRedcuer,
  router: connectRouter(history),
});
