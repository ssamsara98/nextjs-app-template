import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const breakpoints = {
  tablet: '48em', // 768px
  tabpad: '64em', // 1024px
  laptop: '80em', // 1280px
  desktop: '96em', // 1536px
};

// const colors = {};

// const fonts = {};

export const theme = extendTheme({
  config,
  breakpoints,
  // colors,
  // fonts,
});
