require('mocha')
const assert = require('power-assert')
const { isSmartisanOS } = require('../src/index')

describe('isSmartisanOS Test', () => {
  it('should return false in node env', () => {
    assert(isSmartisanOS() === false)
  })
  it('should identify smartisan os', () => {
    assert(isSmartisanOS('Mozilla/5.0 (Linux; U; Android 4.4.2; zh-cn; SM701 Build/SANFRANCISCO) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025469 Mobile Safari/533.1 MicroMessenger/6.2.5.49_r7ead8bf.620 NetType/WIFI Language/zh_CN QQ/6.6.0.2935	') === true)
    assert(isSmartisanOS('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/31.0.1650.18 Mobile/11B554a Safari/8536.25') === false)
  })
})
