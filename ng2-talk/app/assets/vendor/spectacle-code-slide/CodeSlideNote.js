'use strict';

var React = require('react');

var style = {
  position: 'fixed',
  bottom: '20px',
  width: '100%',
  padding: '20px',
  background: 'black',
  color: 'white',
  fontFamily: 'monospace',
  textAlign: 'left'
};

function CodeSlideNote(props) {
  return React.createElement(
    'div',
    { style: style },
    props.children
  );
}

module.exports = CodeSlideNote;