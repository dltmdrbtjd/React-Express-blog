import { createGlobalStyle } from 'styled-components';

type Prop = {
  theme: {
    [propName: string]: any;
  };
};

const GlobalStyle = createGlobalStyle<Prop>`

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'NanumSquare', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    line-height: 1.5;
    font-family: 'NanumSquare', sans-serif;
    background-color: ${({ theme }) => theme.color.bgColor};
  }

  button, input {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
  menu, ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
