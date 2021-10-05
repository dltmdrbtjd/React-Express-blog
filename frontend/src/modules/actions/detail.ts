import {
  LOAD_DETAIL_FAILURE,
  LOAD_DETAIL_SUCCESS,
  LOAD_DETAIL_REQUEST,
} from '../action-types/detail';

export const loadDetailRequest = () => ({
  type: LOAD_DETAIL_REQUEST,
});

export const loadDetailSuccess = (content: any) => ({
  type: LOAD_DETAIL_SUCCESS,
  payload: { data: content },
});

export const loadDetailFailure = () => ({
  type: LOAD_DETAIL_FAILURE,
});

export type DetailActionRequest =
  | ReturnType<typeof loadDetailRequest>
  | ReturnType<typeof loadDetailSuccess>
  | ReturnType<typeof loadDetailFailure>;
