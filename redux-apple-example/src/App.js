import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Apple from './components/apple'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Apple />
    </div>
    </Provider>

  );
}

export default App;
