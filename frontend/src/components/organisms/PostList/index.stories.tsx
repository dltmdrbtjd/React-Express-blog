import React from 'react';
import GlobalThemeProvider from 'src/styles/ThemeProvider';
import PostList from './index';

export default {
  title: 'Organisms / PostList',
  component: PostList,
};

const dummy = {
  title: 'hello',
  content: 'hello',
  tags: ['hello'],
  category: 'hello',
  time: '2021-06-03',
};

export const PostListComponent = () => (
  <GlobalThemeProvider>
    <PostList list={dummy} />
  </GlobalThemeProvider>
);
