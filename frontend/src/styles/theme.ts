const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  sm: calRem(14),
  md: calRem(18),
  lg: calRem(20),
  xl: calRem(24),
  sl: calRem(36),
};

const fontWeight = {
  extraBold: 800,
  bold: 700,
  regular: 400,
};

const color = {
  gray: '3C3C3C',
  lightGray: '575757',
  whiteGray: 'DEDEDE',
  bgColor: '262626',
};

const theme = {
  fontSize,
  fontWeight,
  color,
};

export default theme;
