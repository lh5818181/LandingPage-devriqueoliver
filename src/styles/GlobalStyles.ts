import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after { box-sizing: border-box; margin:0; padding:0; }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
`;