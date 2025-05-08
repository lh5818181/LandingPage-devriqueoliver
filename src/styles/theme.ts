
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import 'styled-components';
import type { Interpolation, FastOmit } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryDark: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
      grayLight: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
      accent: string;
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

