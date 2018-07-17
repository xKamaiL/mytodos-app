import React from 'react';
import ReactDOM from 'react-dom';

import App from './common/App';
// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  render(App);
}
