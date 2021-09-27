import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  children: any;
  onClick?: any;
};

function ListWrapper({ children, className, onClick }: Props) {
  return (
    <S.ListWrapper className={className} onClick={onClick}>
      {children}
    </S.ListWrapper>
  );
}

export default ListWrapper;
