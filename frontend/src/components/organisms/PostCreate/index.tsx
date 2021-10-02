import React, { useState } from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { history } from 'src/modules/reducers';
import * as S from './style';
import './style.css';
import Syntax from './syntax';

function PostCreate() {
  const [markdown, setMarkdown] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const PostingContent = {
    title,
    category,
    tags,
    content: markdown,
  };

  function AddTags(e: any) {
    if (e.key === 'Enter') {
      setTags([...tags, tag]);
      setTag('');
    }
  }

  return (
    <>
      <div className="container">
        <S.EditorWrapper>
          <S.Title
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요."
          />
          <S.Category
            onChange={(e) => setCategory(e.target.value)}
            placeholder="카테고리를 입력하세요."
          />
          <S.TagInput
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyPress={(e) => AddTags(e)}
            placeholder="태그를 입력하세요."
          />
          <S.Tags>
            {tags &&
              tags.map((item) => {
                return <S.TagItem>{item}</S.TagItem>;
              })}
          </S.Tags>
          <textarea
            placeholder="게시글을 작성해주세요."
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </S.EditorWrapper>
        <ReactMarkDown
          className="markdown"
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={Syntax}
        />
      </div>
      <S.PostingHeader>
        <S.Button onClick={() => history.goBack()}>나가기</S.Button>
        <S.Button className="success">작성완료</S.Button>
      </S.PostingHeader>
    </>
  );
}

export default PostCreate;
