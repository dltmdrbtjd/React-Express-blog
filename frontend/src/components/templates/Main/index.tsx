import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Category from 'src/components/organisms/Category';
import Header from 'src/components/organisms/Header';
import PostList from 'src/components/organisms/PostList';
import { loadPostRequest } from 'src/modules/actions/post';
import { useTypedSelector } from 'src/modules/store';
import * as S from './style';

function MainTemplate() {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(loadPostRequest());
  }, []);

  return (
    <>
      <Header />
      <S.MainWrapper>
        <S.MainSection>
          <Category />
          <S.PostSection>
            {posts.map((item: any) => {
              return <PostList key={item._id} list={item} />;
            })}
          </S.PostSection>
        </S.MainSection>
      </S.MainWrapper>
    </>
  );
}

export default MainTemplate;
