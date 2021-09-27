import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  children: any;
  onClick?: any;
};

function List({ children, className, onClick }: Props) {
  return (
    <S.List className={className} onClick={onClick}>
      {children}
    </S.List>
  );
}

export default List;
