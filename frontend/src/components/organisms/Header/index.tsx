import React from 'react';
import { masterId } from 'src/config';
import { history } from 'src/modules/reducers';
import * as S from './style';

function Header() {
  const LocalId = localStorage.getItem('result');

  function Posting() {
    if (LocalId === masterId) {
      return (
        <S.NavList onClick={() => history.push('/posting')}>Posting</S.NavList>
      );
    }
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderSection>
        <S.Logo onClick={() => history.push('/')}>Dev Blog</S.Logo>
        <S.Navigation>
          <S.NavList onClick={() => history.push('/')}>Home</S.NavList>
          <Posting />
        </S.Navigation>
      </S.HeaderSection>
    </S.HeaderWrapper>
  );
}

export default Header;
