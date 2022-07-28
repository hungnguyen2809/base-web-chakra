import { ChakraProvider } from '@chakra-ui/react';
import { store } from 'app/store';
import PrivateLayout from 'layouts/PrivateLayout';
import React from 'react';
import { Provider } from 'react-redux';

import theme from './theme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PrivateLayout>
          <h4>Hung</h4>
        </PrivateLayout>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
