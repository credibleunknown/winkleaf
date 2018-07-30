import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import decodeToken from './utils/decodeToken';
import { SIGN_IN_USER } from './actions/actionTypes';
import AppRouter from './appRouter';

class App extends Component {
  render() {
    const user = decodeToken();
    if (user) {
      store.dispatch({
        type: SIGN_IN_USER,
        user
      });
    }
    return (
      <div>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
