import isSmartisanOS from './is-smartisan-os'

export default async function koaFuckSmartisan({ forbid, response } = { forbid: false }) {
  return async function(ctx, next) {
    if (forbid) {
      Object.assign(ctx.response, response)
      return
    }
    ctx.isSmartisanOS = isSmartisanOS(ctx.request.header['user-agent'])
    await next()
  }
}
