import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: { 500: '#48dbfb' },
    },
    fonts: {
      body: 'Roboto, Helvetica, Aria, sans-serif',
    },
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

export default theme;
