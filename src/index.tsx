import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components/macro';
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 18px;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
