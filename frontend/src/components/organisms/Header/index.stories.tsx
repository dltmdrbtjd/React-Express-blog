import React from 'react';
import GlobalThemeProvider from 'src/styles/ThemeProvider';
import Header from './index';

export default {
  title: 'Organisms / Header',
  component: Header,
};

export const HeaderComponent = () => (
  <GlobalThemeProvider>
    <Header />
  </GlobalThemeProvider>
);
