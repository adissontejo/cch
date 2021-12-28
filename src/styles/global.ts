import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  h1, h2, label, a, input {
    font-family: ${props => props.theme.font.primary};
  }

  button {
    font-family: ${props => props.theme.font.secondary};
  }
  
  fieldset {
    border: 0;
  }

  input {
    outline: none;
  }
`;
