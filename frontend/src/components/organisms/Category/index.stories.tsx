import React from 'react';
import GlobalThemeProvider from 'src/styles/ThemeProvider';
import Category from './index';

export default {
  title: 'Organisms / Category',
  component: Category,
};

export const CategoryComponent = () => (
  <GlobalThemeProvider>
    <Category />
  </GlobalThemeProvider>
);
