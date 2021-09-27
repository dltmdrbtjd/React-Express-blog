import React from 'react';
import * as S from './style';

type Props = {
  children: any;
  className?: string;
  onClick?: any;
};

function Grid({ children, className, onClick }: Props) {
  return (
    <S.Grid className={className} onClick={onClick}>
      {children}
    </S.Grid>
  );
}

export default Grid;
