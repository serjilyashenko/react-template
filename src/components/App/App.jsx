import React from 'react';
import PropTypes from 'prop-types';
import svgTest from './svg-test.svg';
import pngTest from './png-test.png';

const App = props => (
  <div>
    <h1 className="app__element">
      {props.text}
      <img src={svgTest} alt="svg-test" />
    </h1>
    <img src={pngTest} alt="png-test" />
  </div>
);

App.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
