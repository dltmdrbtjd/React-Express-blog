export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST' as const;
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS' as const;
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE' as const;

export type postProps = {
  list: [];
  loading: boolean;
}
