import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: {
        100: '#F0FCFF',
        200: '#D4F5FF',
        300: '#AFEDFF',
        400: '#89E4FF',
        500: '#2ECCFA',
        600: '#38BEE6',
        700: '#29C0EC',
        800: '#007294',
      },
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
