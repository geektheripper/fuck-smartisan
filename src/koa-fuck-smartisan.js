const isSmartisanOs = require('./is-smartisan-os.js')

const defaultMessage = '因开开发者能力有限，本页面不对锤子手机进行兼容，理解万岁。'

/**
 * res page and with a error alert
 * 
 * @export
 * @param {string|Array} [message='因开开发者能力有限，本页面不对锤子手机进行兼容，理解万岁。'] 
 */
module.exports = function fuckSmartisanOs(message = defaultMessage) {
  return async function (ctx, next) {
    if (isSmartisanOs(ctx.request.headers['user-agent'])) {
      ctx.body = message
    } else {
      next()
    }
  }
}
