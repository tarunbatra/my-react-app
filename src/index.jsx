import React from 'react';
import { render } from 'react-dom';
import 'index.scss';

class Root extends React.Component {
  render() {
    return (
      <h1>
        Welcome to my-react-app
      </h1>
    );
  }
};
render(<Root/>, document.querySelector('#app'));
