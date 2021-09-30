import React from 'react';
import Category from 'src/components/organisms/Category';
import Header from 'src/components/organisms/Header';
import PostCreate from 'src/components/organisms/PostCreate';
import PostList from 'src/components/organisms/PostList';
import * as S from './style';

function MainTemplate() {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.MainSection>
          <Category />
          <PostList />
        </S.MainSection>
      </S.MainWrapper>
      <PostCreate />
    </>
  );
}

export default MainTemplate;
