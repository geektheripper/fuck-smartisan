"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = koaFuckSmartisan;

var _isSmartisanOs = _interopRequireDefault(require("./is-smartisan-os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function koaFuckSmartisan() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    forbid: false
  },
      forbid = _ref.forbid,
      response = _ref.response;

  return async function (ctx, next) {
    if (forbid) {
      Object.assign(ctx.response, response);
      return;
    }

    ctx.isSmartisanOS = (0, _isSmartisanOs.default)(ctx.request.header['user-agent']);
    await next();
  };
}