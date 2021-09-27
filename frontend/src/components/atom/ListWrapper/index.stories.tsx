import React from 'react';
import List from '../List';
import ListWrapper from './index';

export default {
  title: 'Atoms / ListWrapper',
  component: 'ListWrapper',
};

export const ListWrap = () => (
  <ListWrapper onClick={() => alert('Hello')}>
    헬로우
    <List>ㅎㅇㅎㅇ</List>
  </ListWrapper>
);
