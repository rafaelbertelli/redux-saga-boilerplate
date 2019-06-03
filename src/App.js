import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './config/ReactotronConfig';
import Routes from './routes';

console.tron.log({ BOOTSTRAP: 'Project started' });

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
