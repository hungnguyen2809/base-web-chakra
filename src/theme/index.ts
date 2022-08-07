import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: {
        700: '#2A6E4F',
      },
    },
    fonts: {
      body: 'Roboto, Helvetica, Aria, sans-serif',
    },
  },
  withDefaultColorScheme({
    colorScheme: 'green',
  })
);

export default theme;
