'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = React.PropTypes;

var _require = require('spectacle');

var Slide = _require.Slide;

var CodeSlideTitle = require('./CodeSlideTitle');
var CodeSlideNote = require('./CodeSlideNote');

var clamp = require('lodash.clamp');
var padStart = require('lodash.padstart');
var getHighlightedCodeLines = require('./getHighlightedCodeLines');
var calculateScrollCenter = require('./calculateScrollCenter');
var scrollToElement = require('./scrollToElement');

function startOrEnd(index, loc) {
  if (index === loc[0]) {
    return 'start';
  } else if (index - 1 === loc[1]) {
    return 'end';
  } else {
    return null;
  }
}

function calculateOpacity(index, loc) {
  return loc[0] <= index && loc[1] > index ? 1 : 0.2;
}

function getLineNumber(index) {
  return '<span class="token comment">' + padStart(index + 1, 3) + '.</span> ';
}

var style = {
  position: 'relative',
  textAlign: 'left',
  overflow: 'hidden',
  color: 'white',
  height: '646px',
  margin: 0,
  padding: '40% 0',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word'
};

var CodeSlide = function (_React$Component) {
  _inherits(CodeSlide, _React$Component);

  function CodeSlide() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeSlide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CodeSlide)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      active: _this.getStorageItem() || 0
    }, _this.scrollActiveIntoView = function (skipAnimation) {
      try {
        var _this$refs = _this.refs;
        var container = _this$refs.container;
        var start = _this$refs.start;
        var end = _this$refs.end;

        var scrollTo = calculateScrollCenter(start, end, container);
        scrollToElement(container, 0, scrollTo, {
          duration: skipAnimation ? 1 : 1000
        });
      } catch (err) {}
    }, _this.onResize = function () {
      _this.scrollActiveIntoView(true);
    }, _this.onKeyDown = function (e) {
      var prev = _this.state.active;
      var active = null;

      if (e.which === 38) {
        active = prev - 1;
      } else if (e.which === 40) {
        active = prev + 1;
      }

      if (active !== null) {
        e.preventDefault();
        active = clamp(active, 0, _this.props.ranges.length - 1);
        _this.goTo(active);
      }
    }, _this.onStorage = function (e) {
      if (e.key === _this.getStorageId()) {
        _this.goTo(+e.newValue, true);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeSlide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('storage', this.onStorage);
      window.addEventListener('resize', this.onResize);
      this.scrollActiveIntoView(true);

      requestAnimationFrame(function () {
        _this2.scrollActiveIntoView(true);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('storage', this.onStorage);
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'getStorageId',
    value: function getStorageId() {
      return 'code-slide:' + this.props.slideIndex;
    }
  }, {
    key: 'getStorageItem',
    value: function getStorageItem() {
      return +localStorage.getItem(this.getStorageId());
    }
  }, {
    key: 'setStorageItem',
    value: function setStorageItem(value) {
      return localStorage.setItem(this.getStorageId(), '' + value);
    }
  }, {
    key: 'goTo',
    value: function goTo(active, skipLocalStorage) {
      this.setState({ active: active }, this.scrollActiveIntoView);
      if (!skipLocalStorage) {
        this.setStorageItem(active);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var code = _props.code;
      var lang = _props.lang;
      var ranges = _props.ranges;

      var rest = _objectWithoutProperties(_props, ['code', 'lang', 'ranges']);

      var active = this.state.active;


      var range = ranges[active] || {};
      var loc = range.loc || [];

      var lines = getHighlightedCodeLines(code, lang).map(function (line, index) {
        return React.createElement('div', {
          key: index,
          ref: startOrEnd(index, loc),
          dangerouslySetInnerHTML: { __html: getLineNumber(index) + line },
          style: { opacity: calculateOpacity(index, loc) } });
      });

      return React.createElement(
        Slide,
        _extends({ bgColor: '#122b45', margin: 1 }, rest),
        range.title && React.createElement(
          CodeSlideTitle,
          null,
          range.title
        ),
        React.createElement(
          'pre',
          { ref: 'container', style: style },
          React.createElement(
            'code',
            null,
            lines
          )
        ),
        range.note && React.createElement(
          CodeSlideNote,
          null,
          range.note
        )
      );
    }
  }]);

  return CodeSlide;
}(React.Component);

CodeSlide.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  ranges: PropTypes.arrayOf(PropTypes.shape({
    loc: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    note: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  }))
};


module.exports = CodeSlide;