export const LOAD_DETAIL_REQUEST = 'LOAD_DETAIL_REQUEST' as const;
export const LOAD_DETAIL_SUCCESS = 'LODA_DETAIL_SUCCESS' as const;
export const LOAD_DETAIL_FAILURE = 'LOAD_DETAIL_FAILURE' as const;

export type content = {
  category: string;
  content: string;
  tags: string[];
  time: string;
  title: string;
  __v: number;
  _id: string;
};

export type detailProps = {
  content: content;
  loading: boolean;
};
