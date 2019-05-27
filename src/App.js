import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './config/ReactotronConfig';

import TodoList from './TodoList';

console.tron.log({ dev: 'Rafiusk' });

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
