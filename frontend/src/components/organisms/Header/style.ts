import Grid from 'src/components/atom/Grid';
import List from 'src/components/atom/List';
import Text from 'src/components/atom/Text';
import ListWrapper from 'src/components/atom/ListWrapper';
import styled from 'styled-components';

export const HeaderWrapper = styled(Grid)`
  width: 100vw;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const HeaderSection = styled(Grid)`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.whiteGray};
`;

export const Logo = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sl};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  cursor: pointer;
`;

export const Navigation = styled(ListWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled(List)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
`;
