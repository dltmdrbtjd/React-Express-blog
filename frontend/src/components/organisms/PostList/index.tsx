import React from 'react';
import { history } from 'src/modules/reducers';
import * as S from './style';

function PostList({ list }) {
  const date = list.time.split('T');

  function MoveToDetail() {
    history.push(`/post/${list._id}`);
  }
  return (
    <S.PostListWrapper onClick={() => MoveToDetail()}>
      <S.PostListTitle>{list.title}</S.PostListTitle>
      <S.PostListSection>
        <S.PostListText>{list.category}</S.PostListText>
        <S.PostListText>{date[0]}</S.PostListText>
      </S.PostListSection>
    </S.PostListWrapper>
  );
}

export default PostList;
