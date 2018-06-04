"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fuckSmartisan;
Object.defineProperty(exports, "isSmartisanOS", {
  enumerable: true,
  get: function get() {
    return _isSmartisanOs.default;
  }
});

var _isSmartisanOs = _interopRequireDefault(require("./is-smartisan-os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMessage = '因开发者个人的偏见，本项目不对锤子手机用户开放。';
/**
 * override page and show a error alert
 * 
 * @export
 * @param {string|Array} [message='因开发者个人的偏见，本项目不对锤子手机用户开放。'] 
 */

function fuckSmartisan() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMessage;

  if ((0, _isSmartisanOs.default)()) {
    setTimeout(function () {
      var body = document.getElementsByTagName('body')[0];
      body.style = '';
      body.className = '';
      body.id = '';
      var lines = Array.isArray(message) ? message : message.split('\n');
      var paras = lines.map(function (line) {
        return "<p>".concat(line, "</p>");
      }).join('');
      body.innerHTML = "<div style=\"width: 100vw; height: 100vh; background-color: #000; position: fixed; left: 0; top: 0; color: chocolate; font-size: 1.5vw; text-align: center; user-select: none; padding-top: 20vh\">".concat(paras, "</div>");
    }, 0);
  }
}