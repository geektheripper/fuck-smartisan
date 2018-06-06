"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = koaFuckSmartisan;

var _isSmartisanOs = _interopRequireDefault(require("./is-smartisan-os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMessage = '因开开发者能力有限，本页面不对锤子手机进行兼容，理解万岁。';

async function koaFuckSmartisan() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    forbid: false
  },
      forbid = _ref.forbid,
      response = _ref.response;

  return async function (ctx, next) {
    var isSOS = (0, _isSmartisanOs.default)(ctx.request.header['user-agent']);

    if (forbid && isSOS) {
      Object.assign(ctx.response, response || {
        body: defaultMessage
      });
      return;
    }

    ctx.isSmartisanOS = isSOS;
    await next();
  };
}