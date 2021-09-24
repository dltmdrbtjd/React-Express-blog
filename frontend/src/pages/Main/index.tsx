import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPostRequest } from 'src/modules/actions/post';
import { useTypedSelector } from 'src/modules/store';

const MainPage = () => {
  const dispatch = useDispatch();
  const list = useTypedSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(loadPostRequest());
  }, []);

  return (
    <div>
      <h1>Redux-saga Test</h1>
      {list.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainPage;
