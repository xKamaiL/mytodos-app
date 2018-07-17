import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Routes from './Routes';
import stores from './store';
import { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Routes />
      </Provider>
    );
  }
}

export default hot(module)(App);
