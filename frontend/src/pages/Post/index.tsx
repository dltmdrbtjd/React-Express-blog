import React from 'react';
import PostDetail from 'src/components/organisms/Post';
import { RouteComponentProps } from 'react-router-dom';

function Post(props: RouteComponentProps<any>) {
  return <PostDetail {...props} />;
}

export default Post;
