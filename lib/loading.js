'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Loading = require('./Loading/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var loading = function (_Component) {
    _inherits(loading, _Component);

    function loading() {
        _classCallCheck(this, loading);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    loading.show = function show(title, options) {
        var props = void 0;
        if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) == 'object') {
            props = title;
        } else {
            props = _extends({}, options, { title: title });
        }
        // const newOptions = {};
        if (this.div == null) {
            this.div = document.createElement('div');
            document.body.appendChild(this.div);
            _reactDom2["default"].render(_react2["default"].createElement(_Loading2["default"], props), this.div);
        }
    };

    loading.hide = function hide() {
        if (this.div != null) {
            _reactDom2["default"].unmountComponentAtNode(this.div);
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    };

    return loading;
}(_react.Component);

exports["default"] = loading;
module.exports = exports['default'];