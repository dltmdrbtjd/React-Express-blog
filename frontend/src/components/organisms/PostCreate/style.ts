import Grid from 'src/components/atom/Grid';
import styled, { css } from 'styled-components';

const InputStyle = css`
  padding: 10px;
  outline: none;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.whiteGray};
  }
`;

export const EditorWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background-color: #ffffff;
`;

export const Title = styled.input`
  ${InputStyle}
  font-size: ${({ theme }) => theme.fontSize.sl};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

export const Category = styled.input`
  ${InputStyle}
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Tags = styled(Grid)`
  display: flex;
  padding: 10px;
`;

export const TagItem = styled.span`
  display: block;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.whiteGray};
  border-radius: 10px;
  margin-right: 10px;
`;

export const TagInput = styled.input`
  ${InputStyle}
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const PostingHeader = styled(Grid)`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &.success {
    background-color: #53a4ff;
    color: #ffffff;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
