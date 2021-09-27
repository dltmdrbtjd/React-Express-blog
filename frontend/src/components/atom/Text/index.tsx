import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  children: string;
};

function Text({ children, className }: Props) {
  return <S.Text className={className}>{children}</S.Text>;
}

export default Text;
