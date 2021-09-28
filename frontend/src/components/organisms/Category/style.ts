import Grid from 'src/components/atom/Grid';
import List from 'src/components/atom/List';
import ListWrapper from 'src/components/atom/ListWrapper';
import Text from 'src/components/atom/Text';
import styled from 'styled-components';

export const CategoryWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const CategorySection = styled(ListWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.whiteGray};
  width: 144px;
  margin-top: 20px;
`;

export const CategoryItem = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  margin-top: 10px;
  width: 108px;
  cursor: pointer;
`;

export const CategoryText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
