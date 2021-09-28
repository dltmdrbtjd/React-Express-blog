import React from 'react';
import * as S from './style';

function PostList() {
  return (
    <S.PostListWrapper>
      <S.PostListTitle>제목을 입력해주세요.</S.PostListTitle>
      <S.PostListSection>
        <S.PostListText>회고록 - WIL</S.PostListText>
        <S.PostListText>2021-09-27</S.PostListText>
      </S.PostListSection>
    </S.PostListWrapper>
  );
}

export default PostList;
