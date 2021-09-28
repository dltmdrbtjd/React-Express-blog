import React from 'react';
import GlobalThemeProvider from 'src/styles/ThemeProvider';
import PostList from './index';

export default {
  title: 'Organisms / PostList',
  component: PostList,
};

export const PostListComponent = () => (
  <GlobalThemeProvider>
    <PostList />
  </GlobalThemeProvider>
);
