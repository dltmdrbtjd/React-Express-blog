import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    margin: 0;
    padding: 0;
    font-family: 'NanumSquare', sans-serif;
  }

  body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    line-height: 1.5;
    font-family: 'NanumSquare', sans-serif;
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
