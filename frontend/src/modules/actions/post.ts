import { LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS } from "../action-types/post";

export const loadPostRequest = () => ({
  type: LOAD_POST_REQUEST,
});

export const loadPostSuccess = (list: []) => ({
  type: LOAD_POST_SUCCESS,
  payload: { data: list }
});

export const loadPostFailure = () => ({
  type: LOAD_POST_FAILURE,
});

export type PostActionRequest = ReturnType<typeof loadPostRequest> | ReturnType<typeof loadPostSuccess> | ReturnType<typeof loadPostFailure>;