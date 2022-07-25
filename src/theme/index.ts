import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      primary: {
        500: '#48dbfb',
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

export default theme;
