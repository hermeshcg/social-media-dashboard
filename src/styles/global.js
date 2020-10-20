import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) =>
      props.theme.mode === 'dark' ? '#1e202a' : '#f7f7f7'};
  }

  h1{
    font: 26px Inter, sans-serif;
  }

  p{
    font: 18px Inter, sans-serif;
  }

  strong{
    font: 32px Inter, sans-serif;
  }

  span{
    font: 15px Inter, sans-serif;
  }
`;
