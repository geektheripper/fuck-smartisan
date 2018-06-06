#!/usr/bin/env node
"use strict";

var _isSmartisanOs = _interopRequireDefault(require("./is-smartisan-os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var param = process.argv[2];

function help() {
  process.stdout.write("\n  usage: is-smartisan [-i|<data>] [--help]\n\n  -i      \u63A5\u6536\u6807\u51C6\u8F93\u5165\n  --help  \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\n  \n  example:\n  $ is-smartisan \"Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; SM919 Build/MXB48T) Ap...\"\n  $ cat user-agent.text | is-smartisan -i\n");
  process.exit(0);
}

if (!param) {
  help();
}

if (process.argv.indexOf('--help') > -1) {
  help();
}

if (param === '-i') {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (data) {
    process.exit((0, _isSmartisanOs.default)(data) ? 0 : 1);
  });
} else {
  process.exit((0, _isSmartisanOs.default)(param) ? 0 : 1);
}