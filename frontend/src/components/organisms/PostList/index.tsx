import React from 'react';
import * as S from './style';

function PostList({ list }) {
  const date = list.time.split('T');
  return (
    <S.PostListWrapper>
      <S.PostListTitle>{list.title}</S.PostListTitle>
      <S.PostListSection>
        <S.PostListText>{list.category}</S.PostListText>
        <S.PostListText>{date[0]}</S.PostListText>
      </S.PostListSection>
    </S.PostListWrapper>
  );
}

export default PostList;
