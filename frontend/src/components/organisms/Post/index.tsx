import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { loadDetailRequest } from 'src/modules/actions/detail';
import { useTypedSelector } from 'src/modules/store';
import Header from '../Header';
import SyntaxHighlight from '../PostCreate/syntax';
import * as S from './style';
import './style.css';

function PostDetail({ match }: RouteComponentProps<any>) {
  const dispatch = useDispatch();
  const Post = useTypedSelector((state) => state.detail.content);
  const date = Post.time.split('T');
  const postId = match.params.postId;

  useEffect(() => {
    dispatch(loadDetailRequest(postId));
  }, []);

  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.TitleSection>
          <S.MainTitle>{Post.title}</S.MainTitle>
          <S.SubTitleSection>
            <S.SubTitle>{`${Post.category} / ${Post.tags[0]}`}</S.SubTitle>
            <S.SubTitle>{date[0]}</S.SubTitle>
          </S.SubTitleSection>
        </S.TitleSection>
        <ReactMarkdown
          className="post_detail"
          children={Post && Post.content}
          components={SyntaxHighlight}
        />
      </S.MainWrapper>
    </>
  );
}

export default PostDetail;
