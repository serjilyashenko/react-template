import React from 'react';
import PropTypes from 'prop-types';
import svgTest from './svg-test.svg';
import pngTest from './png-test.png';

class App extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    hello: 'hi',
  };

  render() {
    return (
      <div>
        <h1 className="app__element">
          {this.props.text}
          <img src={svgTest} alt="svg-test" />
        </h1>
        <img src={pngTest} alt="png-test"/>
      </div>
    );
  }
}

export default App;
