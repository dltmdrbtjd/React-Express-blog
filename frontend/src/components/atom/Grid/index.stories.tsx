import React from 'react';
import Grid from './index';

export default {
  title: 'Atoms / Grid',
  component: Grid,
};

export const HELLO = () => {
  const subTitle = 'HELLO';
  return <Grid onClick={() => alert(subTitle)}>{subTitle}</Grid>;
};
