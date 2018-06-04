"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSmartisanOs = _interopRequireDefault(require("./is-smartisan-os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vIsSmartisanOS = {
  install: function install(Vue) {
    Vue.prototype.$isSmartisanOS = (0, _isSmartisanOs.default)();
  }
};
var _default = vIsSmartisanOS;
exports.default = _default;