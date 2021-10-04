import React from 'react';
import { useTypedSelector } from 'src/modules/store';
import * as S from './style';

function Category() {
  const category = useTypedSelector((state) => state.post.list);

  function CategoryFilter(list) {
    return category.filter((item: any) => item.category === list);
  }

  const Dev = CategoryFilter('개발지식');
  const Diary = CategoryFilter('회고록');
  const Think = CategoryFilter('나의 생각');

  function TagFilter(arr) {
    const ArrTag = arr.map((item: any) => {
      const Tag = item.tags[0];
      const TagLength = arr.filter(
        (list: any) => list.tags[0] === item.tags[0],
      ).length;
      return `${Tag}/${TagLength}`;
    });

    const Categories = [...new Set(ArrTag)];
    const CategoryList = Categories.map((item: string) => {
      return item.split('/');
    });
    return CategoryList;
  }

  const DevList = TagFilter(Dev);
  const DiaryList = TagFilter(Diary);
  const ThinkList = TagFilter(Think);

  return (
    <S.CategoryWrapper>
      <S.CategorySection>
        💻 개발지식 ({Dev.length})
        {DevList.map((item) => {
          return (
            <S.CategoryItem key={item[0]}>
              <S.CategoryText>{item[0]}</S.CategoryText>
              <S.CategoryText>{item[1]}</S.CategoryText>
            </S.CategoryItem>
          );
        })}
      </S.CategorySection>
      <S.CategorySection>
        📄 회고록 ({Diary.length})
        {DiaryList.map((item) => {
          return (
            <S.CategoryItem key={item[0]}>
              <S.CategoryText>{item[0]}</S.CategoryText>
              <S.CategoryText>{item[1]}</S.CategoryText>
            </S.CategoryItem>
          );
        })}
      </S.CategorySection>
      <S.CategorySection>
        🤔 나의 생각 ({Think.length})
        {ThinkList &&
          ThinkList.map((item) => {
            return (
              <S.CategoryItem key={item[0]}>
                <S.CategoryText>{item[0]}</S.CategoryText>
                <S.CategoryText>{item[1]}</S.CategoryText>
              </S.CategoryItem>
            );
          })}
      </S.CategorySection>
    </S.CategoryWrapper>
  );
}

export default Category;
