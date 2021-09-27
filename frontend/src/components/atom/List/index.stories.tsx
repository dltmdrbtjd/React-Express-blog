import React from 'react';
import List from './index';

export default {
  title: 'Atoms / List',
  component: List,
};

export const HELLO = () => <List onClick={() => alert('HELLO')}>HELLO~~~</List>;
