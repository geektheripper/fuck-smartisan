import isSmartisanOS from './is-smartisan-os'

const defaultMessage = '因开开发者能力有限，本页面不对锤子手机进行兼容，理解万岁。'

export default async function koaFuckSmartisan({ forbid, response } = { forbid: false }) {
  return async function(ctx, next) {
    const isSOS = isSmartisanOS(ctx.request.header['user-agent'])
    if (forbid && isSOS) {
      Object.assign(ctx.response, response || { body: defaultMessage })
      return
    }
    ctx.isSmartisanOS = isSOS
    await next()
  }
}
