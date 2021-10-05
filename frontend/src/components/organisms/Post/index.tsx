import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { RouteComponentProps } from 'react-router-dom';
import { DetailPostApi } from 'src/libs/api';
import Header from '../Header';
import SyntaxHighlight from '../PostCreate/syntax';
import * as S from './style';
import './style.css';

function PostDetail({ match }: RouteComponentProps<any>) {
  const postId = match.params.postId;

  useEffect(() => {
    DetailPostApi(postId)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <S.MainWrapper>
        <ReactMarkdown
          className="post_detail"
          children="# 안녕하세요"
          components={SyntaxHighlight}
        />
      </S.MainWrapper>
    </>
  );
}

export default PostDetail;
