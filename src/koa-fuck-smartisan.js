const isSmartisanOs = require('./is-smartisan-os.js')

function fuckSmartisanOs(message) {
  return async function (ctx, next) {
    if (isSmartisanOs(ctx.request.headers['user-agent'])) {
      ctx.body = message
    } else {
      next()
    }
  }
}
