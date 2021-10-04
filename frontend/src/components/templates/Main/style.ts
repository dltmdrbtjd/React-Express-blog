import Grid from 'src/components/atom/Grid';
import styled from 'styled-components';

export const MainWrapper = styled(Grid)`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const MainSection = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export const PostSection = styled(Grid)`
  display: flex;
  flex-direction: column;
`;
