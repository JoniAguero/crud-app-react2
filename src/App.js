import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
        </div>
      </Provider>
    );
  }
}

export default App;
