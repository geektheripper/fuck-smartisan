import isSmartisanOS from './is-smartisan-os'

const vIsSmartisanOS = {
  install(Vue) {
    Vue.prototype.$isSmartisanOS = isSmartisanOS()
  }
}

export default vIsSmartisanOS
