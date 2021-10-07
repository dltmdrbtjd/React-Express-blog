import styled, { css } from 'styled-components';
import Grid from 'src/components/atom/Grid';
import Text from 'src/components/atom/Text';

export const MainWrapper = styled(Grid)`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.whiteGray};
`;

export const TitleSection = styled(Grid)`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

export const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 20px;
`;

export const SubTitleSection = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled(Text)``;
