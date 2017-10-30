import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    hello: 'hi',
  };

  render() {
    return <h1 className="app__element">{this.state.hello} - {this.props.text}</h1>;
  }
}

export default App;
