import Grid from 'src/components/atom/Grid';
import Text from 'src/components/atom/Text';
import styled from 'styled-components';

export const PostListWrapper = styled(Grid)`
  width: 530px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

export const PostListTitle = styled.h2`
  color: ${({ theme }) => theme.color.whiteGray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 10px;
`;

export const PostListText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.whiteGray};
`;

export const PostListSection = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostListTag = styled(Grid)``;
