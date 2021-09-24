import { combineReducers } from 'redux';

import { postRedcuer } from './post';

export default combineReducers({
  post: postRedcuer,
})