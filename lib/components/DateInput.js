"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _isTouchDevice = _interopRequireDefault(require("is-touch-device"));

var _noflip = _interopRequireDefault(require("../utils/noflip"));

var _getInputHeight = _interopRequireDefault(require("../utils/getInputHeight"));

var _OpenDirectionShape = _interopRequireDefault(require("../shapes/OpenDirectionShape"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FANG_PATH_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0z");
var FANG_STROKE_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0 ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX);
var FANG_PATH_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX, ",0 ").concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, "z");
var FANG_STROKE_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",0");
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  // also used as label
  displayValue: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  focused: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  small: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDownShiftTab: _propTypes["default"].func,
  onKeyDownTab: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  // accessibility
  isFocused: _propTypes["default"].bool // describes actual DOM focus

})) : {};;
var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  small: false,
  block: false,
  regular: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // accessibility
  isFocused: false
};

var DateInput =
/*#__PURE__*/
function (_ref) {
  _inherits(DateInput, _ref);

  _createClass(DateInput, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));
    _this.state = {
      dateString: '',
      isTouchDevice: false
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.setInputRef = _this.setInputRef.bind(_assertThisInitialized(_this));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 300, {
      trailing: false
    });
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isTouchDevice: (0, _isTouchDevice["default"])()
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dateString = this.state.dateString;

      if (dateString && nextProps.displayValue) {
        this.setState({
          dateString: ''
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          focused = _this$props.focused,
          isFocused = _this$props.isFocused;
      if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

      if (focused && isFocused) {
        this.inputRef.focus();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          onKeyDownQuestionMark = _this$props2.onKeyDownQuestionMark;
      var dateString = e.target.value; // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
      // special case the `?` key so that it always triggers the appropriate callback, instead of
      // modifying the input value

      if (dateString[dateString.length - 1] === '?') {
        onKeyDownQuestionMark(e);
      } else {
        this.setState({
          dateString: dateString
        }, function () {
          return onChange(dateString);
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      e.stopPropagation();

      if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
        this.throttledKeyDown(e);
      }
    }
  }, {
    key: "onFinalKeyDown",
    value: function onFinalKeyDown(e) {
      var _this$props3 = this.props,
          onKeyDownShiftTab = _this$props3.onKeyDownShiftTab,
          onKeyDownTab = _this$props3.onKeyDownTab,
          onKeyDownArrowDown = _this$props3.onKeyDownArrowDown,
          onKeyDownQuestionMark = _this$props3.onKeyDownQuestionMark;
      var key = e.key;

      if (key === 'Tab') {
        if (e.shiftKey) {
          onKeyDownShiftTab(e);
        } else {
          onKeyDownTab(e);
        }
      } else if (key === 'ArrowDown') {
        onKeyDownArrowDown(e);
      } else if (key === '?') {
        e.preventDefault();
        onKeyDownQuestionMark(e);
      }
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(ref) {
      this.inputRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          dateString = _this$state.dateString,
          isTouch = _this$state.isTouchDevice;
      var _this$props4 = this.props,
          id = _this$props4.id,
          placeholder = _this$props4.placeholder,
          displayValue = _this$props4.displayValue,
          screenReaderMessage = _this$props4.screenReaderMessage,
          focused = _this$props4.focused,
          showCaret = _this$props4.showCaret,
          onFocus = _this$props4.onFocus,
          disabled = _this$props4.disabled,
          required = _this$props4.required,
          readOnly = _this$props4.readOnly,
          openDirection = _this$props4.openDirection,
          verticalSpacing = _this$props4.verticalSpacing,
          small = _this$props4.small,
          regular = _this$props4.regular,
          block = _this$props4.block,
          styles = _this$props4.styles,
          reactDates = _this$props4.theme.reactDates;
      var value = dateString || displayValue || '';
      var screenReaderMessageId = "DateInput__screen-reader-message-".concat(id);
      var withFang = showCaret && focused;
      var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
      return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateInput, small && styles.DateInput__small, block && styles.DateInput__block, withFang && styles.DateInput__withFang, disabled && styles.DateInput__disabled, withFang && openDirection === _constants.OPEN_DOWN && styles.DateInput__openDown, withFang && openDirection === _constants.OPEN_UP && styles.DateInput__openUp), _react["default"].createElement("input", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_input, small && styles.DateInput_input__small, regular && styles.DateInput_input__regular, readOnly && styles.DateInput_input__readOnly, focused && styles.DateInput_input__focused, disabled && styles.DateInput_input__disabled), {
        "aria-label": placeholder,
        type: "text",
        id: id,
        name: id,
        ref: this.setInputRef,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onFocus: onFocus,
        placeholder: placeholder,
        autoComplete: "off",
        disabled: disabled,
        readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
        required: required,
        "aria-describedby": screenReaderMessage && screenReaderMessageId
      })), withFang && _react["default"].createElement("svg", _extends({
        role: "presentation",
        focusable: "false"
      }, (0, _reactWithStyles.css)(styles.DateInput_fang, openDirection === _constants.OPEN_DOWN && {
        top: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
      }, openDirection === _constants.OPEN_UP && {
        bottom: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
      })), _react["default"].createElement("path", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_fangShape), {
        d: openDirection === _constants.OPEN_DOWN ? FANG_PATH_TOP : FANG_PATH_BOTTOM
      })), _react["default"].createElement("path", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_fangStroke), {
        d: openDirection === _constants.OPEN_DOWN ? FANG_STROKE_TOP : FANG_STROKE_BOTTOM
      }))), screenReaderMessage && _react["default"].createElement("p", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_screenReaderMessage), {
        id: screenReaderMessageId
      }), screenReaderMessage));
    }
  }]);

  return DateInput;
}(_react["default"].PureComponent || _react["default"].Component);

DateInput.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DateInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing,
      spacing = _ref2$reactDates.spacing,
      font = _ref2$reactDates.font,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateInput: {
      margin: 0,
      padding: spacing.inputPadding,
      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle'
    },
    DateInput__small: {
      width: sizing.inputWidth_small
    },
    DateInput__block: {
      width: '100%'
    },
    DateInput__disabled: {
      background: color.disabled,
      color: color.textDisabled
    },
    DateInput_input: {
      fontWeight: 200,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.text,
      backgroundColor: color.background,
      width: '100%',
      padding: "".concat(spacing.displayTextPaddingVertical, "px ").concat(spacing.displayTextPaddingHorizontal, "px"),
      paddingTop: spacing.displayTextPaddingTop,
      paddingBottom: spacing.displayTextPaddingBottom,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight),
      border: border.input.border,
      borderTop: border.input.borderTop,
      borderRight: (0, _noflip["default"])(border.input.borderRight),
      borderBottom: border.input.borderBottom,
      borderLeft: (0, _noflip["default"])(border.input.borderLeft),
      borderRadius: border.input.borderRadius
    },
    DateInput_input__small: {
      fontSize: font.input.size_small,
      lineHeight: font.input.lineHeight_small,
      letterSpacing: font.input.letterSpacing_small,
      padding: "".concat(spacing.displayTextPaddingVertical_small, "px ").concat(spacing.displayTextPaddingHorizontal_small, "px"),
      paddingTop: spacing.displayTextPaddingTop_small,
      paddingBottom: spacing.displayTextPaddingBottom_small,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft_small),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight_small)
    },
    DateInput_input__regular: {
      fontWeight: 'auto'
    },
    DateInput_input__readOnly: {
      userSelect: 'none'
    },
    DateInput_input__focused: {
      outline: border.input.outlineFocused,
      background: color.backgroundFocused,
      border: border.input.borderFocused,
      borderTop: border.input.borderTopFocused,
      borderRight: (0, _noflip["default"])(border.input.borderRightFocused),
      borderBottom: border.input.borderBottomFocused,
      borderLeft: (0, _noflip["default"])(border.input.borderLeftFocused)
    },
    DateInput_input__disabled: {
      background: color.disabled,
      fontStyle: font.input.styleDisabled
    },
    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    },
    DateInput_fang: {
      position: 'absolute',
      width: _constants.FANG_WIDTH_PX,
      height: _constants.FANG_HEIGHT_PX,
      left: 22,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      zIndex: zIndex + 2
    },
    DateInput_fangShape: {
      fill: color.background
    },
    DateInput_fangStroke: {
      stroke: color.core.border,
      fill: 'transparent'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateInput);

exports["default"] = _default;