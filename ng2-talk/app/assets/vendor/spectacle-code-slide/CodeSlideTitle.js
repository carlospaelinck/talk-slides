'use strict';

var React = require('react');

var styles = {
  position: 'fixed',
  left: '50%',
  top: '20px',
  transform: 'translate(-50%)',
  padding: '20px 40px',
  border: '10px solid hotpink',
  fontSize: '2.5em',
  color: 'white',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap'
};

function CodeSlideTitle(props) {
  return React.createElement(
    'h1',
    { style: styles },
    props.children
  );
}

module.exports = CodeSlideTitle;