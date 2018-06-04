import isSmartisanOS from './is-smartisan-os'

const defaultMessage = '因开发者个人的偏见，本项目不对锤子手机用户开放。'

/**
 * override page and show a error alert
 * 
 * @export
 * @param {string|Array} [message='因开发者个人的偏见，本项目不对锤子手机用户开放。'] 
 */
export default function fuckSmartisan(message = defaultMessage) {
  if (isSmartisanOS()) {
    setTimeout(() => {
      const body = document.getElementsByTagName('body')[0]
      body.style = ''
      body.className = ''
      body.id = ''
      const lines = Array.isArray(message) ? message : message.split('\n')
      const paras = lines.map(line => `<p>${line}</p>`).join('')
      body.innerHTML = `<div style="width: 100vw; height: 100vh; background-color: #000; position: fixed; left: 0; top: 0; color: chocolate; font-size: 1.5vw; text-align: center; user-select: none; padding-top: 20vh">${paras}</div>`
    }, 0)
  }
}

export { isSmartisanOS }