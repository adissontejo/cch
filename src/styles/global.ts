import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  h1, h2, label, button, a, input {
    font-family: 'Gloria Hallelujah';
  }

  fieldset {
    border: 0;
  }

  input {
    outline: none;
  }
`;
