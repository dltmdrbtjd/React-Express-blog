import produce from 'immer';
import {
  LOAD_DETAIL_FAILURE,
  LOAD_DETAIL_REQUEST,
  LOAD_DETAIL_SUCCESS,
  detailProps,
} from '../action-types/detail';

import { DetailActionRequest } from '../actions/detail';

export const initialState: detailProps = {
  content: null,
  loading: false,
};

export const detailReducer = (
  state = initialState,
  action: DetailActionRequest,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_DETAIL_REQUEST:
        draft.loading = true;
        break;
      case LOAD_DETAIL_SUCCESS:
        draft.content = action.payload.data;
        draft.loading = false;
        break;
      case LOAD_DETAIL_FAILURE:
        draft.content = state.content;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
