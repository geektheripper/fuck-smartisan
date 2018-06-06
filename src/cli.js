#!/usr/bin/env node
import isSmartisanOS from './is-smartisan-os'

const param = process.argv[2]

function help() {
  process.stdout.write(`
  usage: is-smartisan [-i|<data>] [--help]

  -i      接收标准输入
  --help  显示帮助信息
  
  example:
  $ is-smartisan "Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; SM919 Build/MXB48T) Ap..."
  $ cat user-agent.text | is-smartisan -i
`)
  process.exit(0)
}

if (!param) { help() }
if (process.argv.indexOf('--help') > -1) { help() }

if (param === '-i') {
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(data) {
    process.exit(isSmartisanOS(data) ? 0 : 1)
  })
} else {
  process.exit(isSmartisanOS(param) ? 0 : 1)
}
