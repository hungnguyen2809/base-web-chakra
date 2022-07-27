import { ChakraProvider } from '@chakra-ui/react';
import { store } from 'app/store';
import DefaultLayout from 'layouts/components/DefaultLayout';
import React from 'react';
import { Provider } from 'react-redux';

import theme from './theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
