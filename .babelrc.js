const pkg = require('./package.json')

const replacePlugin = ["minify-replace", {
  "replacements": [{
    "identifierName": "__VERSION__",
    "replacement": {
      "type": "StringLiteral",
      "value": pkg.version,
    }
  }]
}]

module.exports = {
  "presets": ["es2015"],
  "plugins": [replacePlugin]
}