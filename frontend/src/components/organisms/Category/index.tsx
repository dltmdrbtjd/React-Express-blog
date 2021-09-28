import React from 'react';
import * as S from './style';

function Category() {
  return (
    <S.CategoryWrapper>
      <S.CategorySection>
        💻 개발지식 (3)
        <S.CategoryItem>
          <S.CategoryText>JavaScript</S.CategoryText>
          <S.CategoryText>3</S.CategoryText>
        </S.CategoryItem>
      </S.CategorySection>
    </S.CategoryWrapper>
  );
}

export default Category;
