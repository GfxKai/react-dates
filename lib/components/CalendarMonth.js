"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _moment = _interopRequireDefault(require("moment"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _CalendarWeek = _interopRequireDefault(require("./CalendarWeek"));

var _CalendarDay = _interopRequireDefault(require("./CalendarDay"));

var _calculateDimension = _interopRequireDefault(require("../utils/calculateDimension"));

var _getCalendarMonthWeeks = _interopRequireDefault(require("../utils/getCalendarMonthWeeks"));

var _isSameDay = _interopRequireDefault(require("../utils/isSameDay"));

var _toISODateString = _interopRequireDefault(require("../utils/toISODateString"));

var _ModifiersShape = _interopRequireDefault(require("../shapes/ModifiersShape"));

var _ScrollableOrientationShape = _interopRequireDefault(require("../shapes/ScrollableOrientationShape"));

var _DayOfWeekShape = _interopRequireDefault(require("../shapes/DayOfWeekShape"));

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

var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  month: _reactMomentProptypes["default"].momentObj,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  isVisible: _propTypes["default"].bool,
  enableOutsideDays: _propTypes["default"].bool,
  modifiers: _propTypes["default"].objectOf(_ModifiersShape["default"]),
  orientation: _ScrollableOrientationShape["default"],
  daySize: _airbnbPropTypes.nonNegativeInteger,
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  onMonthSelect: _propTypes["default"].func,
  onYearSelect: _propTypes["default"].func,
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  firstDayOfWeek: _DayOfWeekShape["default"],
  setMonthTitleHeight: _propTypes["default"].func,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  focusedDate: _reactMomentProptypes["default"].momentObj,
  // indicates focusable day
  isFocused: _propTypes["default"].bool,
  // indicates whether or not to move focus to focusable day
  // i18n
  monthFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
})) : {};;
var defaultProps = {
  month: (0, _moment["default"])(),
  horizontalMonthPadding: 13,
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthSelect: function onMonthSelect() {},
  onYearSelect: function onYearSelect() {},
  renderMonthText: null,
  renderCalendarDay: function renderCalendarDay(props) {
    return _react["default"].createElement(_CalendarDay["default"], props);
  },
  renderDayContents: null,
  renderMonthElement: null,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  focusedDate: null,
  isFocused: false,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined,
  verticalBorderSpacing: undefined
};

var CalendarMonth =
/*#__PURE__*/
function (_ref) {
  _inherits(CalendarMonth, _ref);

  _createClass(CalendarMonth, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
    }
  }]);

  function CalendarMonth(props) {
    var _this;

    _classCallCheck(this, CalendarMonth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonth).call(this, props));
    _this.state = {
      weeks: (0, _getCalendarMonthWeeks["default"])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    _this.setCaptionRef = _this.setCaptionRef.bind(_assertThisInitialized(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMonthTitleHeightTimeout = setTimeout(this.setMonthTitleHeight, 0);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var month = nextProps.month,
          enableOutsideDays = nextProps.enableOutsideDays,
          firstDayOfWeek = nextProps.firstDayOfWeek;
      var _this$props = this.props,
          prevMonth = _this$props.month,
          prevEnableOutsideDays = _this$props.enableOutsideDays,
          prevFirstDayOfWeek = _this$props.firstDayOfWeek;

      if (!month.isSame(prevMonth) || enableOutsideDays !== prevEnableOutsideDays || firstDayOfWeek !== prevFirstDayOfWeek) {
        this.setState({
          weeks: (0, _getCalendarMonthWeeks["default"])(month, enableOutsideDays, firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : firstDayOfWeek)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.setMonthTitleHeightTimeout) {
        clearTimeout(this.setMonthTitleHeightTimeout);
      }
    }
  }, {
    key: "setMonthTitleHeight",
    value: function setMonthTitleHeight() {
      var setMonthTitleHeight = this.props.setMonthTitleHeight;

      if (setMonthTitleHeight) {
        var captionHeight = (0, _calculateDimension["default"])(this.captionRef, 'height', true, true);
        setMonthTitleHeight(captionHeight);
      }
    }
  }, {
    key: "setCaptionRef",
    value: function setCaptionRef(ref) {
      this.captionRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dayAriaLabelFormat = _this$props2.dayAriaLabelFormat,
          daySize = _this$props2.daySize,
          focusedDate = _this$props2.focusedDate,
          horizontalMonthPadding = _this$props2.horizontalMonthPadding,
          isFocused = _this$props2.isFocused,
          isVisible = _this$props2.isVisible,
          modifiers = _this$props2.modifiers,
          month = _this$props2.month,
          monthFormat = _this$props2.monthFormat,
          onDayClick = _this$props2.onDayClick,
          onDayMouseEnter = _this$props2.onDayMouseEnter,
          onDayMouseLeave = _this$props2.onDayMouseLeave,
          onMonthSelect = _this$props2.onMonthSelect,
          onYearSelect = _this$props2.onYearSelect,
          orientation = _this$props2.orientation,
          phrases = _this$props2.phrases,
          renderCalendarDay = _this$props2.renderCalendarDay,
          renderDayContents = _this$props2.renderDayContents,
          renderMonthElement = _this$props2.renderMonthElement,
          renderMonthText = _this$props2.renderMonthText,
          styles = _this$props2.styles,
          verticalBorderSpacing = _this$props2.verticalBorderSpacing;
      var weeks = this.state.weeks;
      var monthTitle = renderMonthText ? renderMonthText(month) : month.format(monthFormat);
      var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
      return _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.CalendarMonth, {
        padding: "0 ".concat(horizontalMonthPadding, "px")
      }), {
        "data-visible": isVisible
      }), _react["default"].createElement("div", _extends({
        ref: this.setCaptionRef
      }, (0, _reactWithStyles.css)(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), renderMonthElement ? renderMonthElement({
        month: month,
        onMonthSelect: onMonthSelect,
        onYearSelect: onYearSelect
      }) : _react["default"].createElement("strong", null, monthTitle)), _react["default"].createElement("table", _extends({}, (0, _reactWithStyles.css)(!verticalBorderSpacing && styles.CalendarMonth_table, verticalBorderSpacing && styles.CalendarMonth_verticalSpacing, verticalBorderSpacing && {
        borderSpacing: "0px ".concat(verticalBorderSpacing, "px")
      }), {
        role: "presentation"
      }), _react["default"].createElement("tbody", null, weeks.map(function (week, i) {
        return _react["default"].createElement(_CalendarWeek["default"], {
          key: i
        }, week.map(function (day, dayOfWeek) {
          return renderCalendarDay({
            key: dayOfWeek,
            day: day,
            daySize: daySize,
            isOutsideDay: !day || day.month() !== month.month(),
            tabIndex: isVisible && (0, _isSameDay["default"])(day, focusedDate) ? 0 : -1,
            isFocused: isFocused,
            onDayMouseEnter: onDayMouseEnter,
            onDayMouseLeave: onDayMouseLeave,
            onDayClick: onDayClick,
            renderDayContents: renderDayContents,
            phrases: phrases,
            modifiers: modifiers[(0, _toISODateString["default"])(day)],
            ariaLabelFormat: dayAriaLabelFormat
          });
        }));
      }))));
    }
  }]);

  return CalendarMonth;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonth.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CalendarMonth.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      spacing = _ref2$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      verticalAlign: 'top',
      userSelect: 'none'
    },
    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    CalendarMonth_verticalSpacing: {
      borderCollapse: 'separate'
    },
    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },
    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonth);

exports["default"] = _default;