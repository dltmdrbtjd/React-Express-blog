import produce from 'immer';
import {
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  postProps,
} from '../action-types/post';
import { PostActionRequest } from '../actions/post';

export const initialState: postProps = {
  list: [],
  loading: false,
};

export const postRedcuer = (
  state: postProps = initialState,
  action: PostActionRequest,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loading = true;
        break;
      case LOAD_POST_SUCCESS:
        draft.list = action.payload.data;
        draft.loading = false;
        break;
      case LOAD_POST_FAILURE:
        draft.list = state.list;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
