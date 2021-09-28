import React from 'react';
import * as S from './style';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderSection>
        <S.Logo>Dev Blog</S.Logo>
        <S.Navigation>
          <S.NavList>Home</S.NavList>
        </S.Navigation>
      </S.HeaderSection>
    </S.HeaderWrapper>
  );
}

export default Header;
