'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpeed = require('react-speed');

var _LoadingIcon = require('./LoadingIcon');

var _LoadingIcon2 = _interopRequireDefault(_LoadingIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Loading = function (_Component) {
    _inherits(Loading, _Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Loading.prototype.render = function render() {
        var _props = this.props,
            _props$ratio = _props.ratio,
            ratio = _props$ratio === undefined ? 1 : _props$ratio,
            _props$title = _props.title,
            title = _props$title === undefined ? '数据加载中' : _props$title;

        return _react2["default"].createElement(
            _reactSpeed.Block,
            { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1500 }, j: 'c', a: 'c' },
            _react2["default"].createElement(
                _reactSpeed.Block,
                { w: 160 * ratio, h: 78 * ratio, bc: 'rgba(1,1,1,0.6)', s: { borderRadius: 5 * ratio }, a: 'c', vf: true, p: 15 * ratio },
                _react2["default"].createElement(
                    _reactSpeed.Block,
                    { f: '1', w: 30 * ratio, mt: 10 * ratio },
                    _react2["default"].createElement(_LoadingIcon2["default"], { ratio: ratio })
                ),
                _react2["default"].createElement(
                    _reactSpeed.Block,
                    { fs: 14 * ratio, fc: '#fff' },
                    title
                )
            )
        );
    };

    return Loading;
}(_react.Component);

exports["default"] = Loading;
module.exports = exports['default'];