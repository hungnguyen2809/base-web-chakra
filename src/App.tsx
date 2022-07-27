import { ChakraProvider } from '@chakra-ui/react';
import DefaultLayout from 'layouts/components/DefaultLayout';
import React from 'react';

import theme from './theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout />
    </ChakraProvider>
  );
};

export default App;
