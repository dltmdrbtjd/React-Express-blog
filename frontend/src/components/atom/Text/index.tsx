import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  children: string;
  onClick?: () => void;
};

function Text({ children, className, onClick }: Props) {
  return (
    <S.Text className={className} onClick={onClick}>
      {children}
    </S.Text>
  );
}

export default Text;
