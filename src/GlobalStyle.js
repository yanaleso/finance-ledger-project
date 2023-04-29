import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: 1.35;
    color: ${p => p.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
  display: block;
  max-width: 100%;
  height: auto;
  }
`;