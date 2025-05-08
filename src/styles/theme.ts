import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      gray: string;
      white: string;
    };
    breakpoints: {
      desktop: string;
    };
  }
}



export const theme = {
  colors: {
    primary: '#00BFFF',
    primaryDark: '#001f3f',
    accent: '#A100FF',
    background: '#0D0D0D',
    gray: '#2E2E2E',
    grayLight: '#3C3C3C',
    white: '#F5F5F5',
  },
  breakpoints: {
    desktop: '1200px',
  },
};

