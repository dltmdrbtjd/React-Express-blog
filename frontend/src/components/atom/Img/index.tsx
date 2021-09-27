import React from 'react';
import * as S from './style';

type Props = {
  src: string;
  className?: string;
  onClick?: any;
};

function Img({ src, onClick, className }: Props) {
  return (
    <>
      <S.Image src={src} onClick={onClick} className={className} />
    </>
  );
}

export default Img;
