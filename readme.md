# 迁移公告：

经网友提醒，本项目违反了 GitHub TOS，故将项目迁移到个人的私有 GitLab 仓库，需要提交 PR 的用户请发 Issue 联系我
项目迁移后地址：https://git.dev.geektr.cloud/geektr/fuck-smartisan

# Fuck Smartisan

**这是个恶意的项目，作者知道自己是错的，但并不会悔改。所以请勿费力批评。**

本项目用于拒绝锤子手机，请在明确认知到自己是在作恶的情况下使用。

另外，除非你有相应的权力，否则请勿在公司项目中使用。

## 基本使用

您可以简单地在项目代码中引入本项目来实现拒绝锤子手机的访问

```javascript
import fuckSmartisan from 'fuck-smartisan'

fuckSmartisan()
```

fuckSmartisan 函数将清理 html 标签下所有内容，并替换为一行 ‘因开发者个人的偏见，本项目不对锤子手机用户开放。’

你也可以自定义的提示信息，支持以下几种用法（第二、三条将折行显示）

```javascript
fuckSmartisan('本项目开发者精力有限，暂不准备兼容锤子手机')
fuckSmartisan('本项目内含播放声音的内容\n为避免影响您使用 TNT\n特此主动屏蔽')
fuckSmartisan(['锤子万岁', '太君威武'])
```

PS: 为了最佳的阅读体验，建议单行不超过 50 字

## 自定义使用

本项目提供了简单的 isSmartisanOS 函数，您可以引入此函数来判断一个 userAgent 字符串是否来自锤子手机，从而实现定制化的服务。

用法：

```javascript
import { isSmartisanOS } from 'fuck-smartisan'

isSmartisanOS() // 浏览器环境下可不传参，将自动获取 navigator.userAgent 用于判断
isSmartisanOS(ctx.userAgent)
```

示例：

```javascript
function showPrice(price) {
  if (isSmartisanOS()) {
    return [`原价: ${price * 3}`, `锤子用户专享价：${price * 2.5}`]
  } else {
    return [`原价: ${price * 1.1}`, `现时特惠：${price}`]
  }
}

xxxxx.innerText = showPrice(100)
```

### 作为 Vue 插件使用

本项目提供了 Vue 插件，该插件将在 Vue 原型上添加一个 `$isSmartisanOS` 属性用于判断是否锤子手机

引入：

```javascript
import Vue from 'vue'
import vIsSmartisanOS from 'fuck-smartisan/dist/v-is-smartisan-os'

Vue.use(asyncValidatorPromisify)
```

使用：

```html
<template>
  <div class="sku">
    <h1 class="sku__title">Apple iPhone X (A1865) 256G 深空灰色 三网通</h1>
    <img class="sku__image" src="xxxx" />
    <v-button class="sku__btn" v-if="$isSmartisanOS" :disabled="$isSmartisanOS">您的手机远强于该手机，无需购买</v-button>
    <v-button class="sku__btn" v-else :disabled="$isSmartisanOS" @click="buy(skuInfo)">点击购买</v-button>
  </div>
</template>
```

```javascript
export default {
  name: 'beginning-info',
  // ......
  methods: {
    async getCoupons() {
      if (this.$isSmartisanOS) {
        return []
      }
      try {
        const coupons = await queryCoupons({ expried: false })
        return coupons
      } catch (e) {
        alert('网络异常')
        return []
      }
    },
  },
}
```

### 作为 Koa 插件使用

本项目提供了 Koa 插件，该中间件将根据客户端的 user-agent 判断是否锤子手机，进而 ctx 上添加一个 `isSmartisanOS` 属性。

```javascript
import Koa from 'koa' // koa 2
import koaFuckSmartisan from 'fuck-smartisan/dist/koa-fuck-smartisan'

Vue.use(koaFuckSmartisan())

app.use(ctx => {
  if (ctx.isSmartisanOS) {
    ctx.status = 301
    ctx.body = '锤子手机售价低于2500，我是你孙子'
    ctx.redirect('http://www.smartisan.love')
  }
})

```

您也可以向插件传入一个 config 来直接中断 koa 剩余业务逻辑，直接返回一行 “因开开发者能力有限，本页面不对锤子手机进行兼容，理解万岁。” 给锤子客户端：

```javascript
import Koa from 'koa' // koa 2
import koaFuckSmartisan from 'fuck-smartisan/dist/koa-fuck-smartisan'

Vue.use(koaFuckSmartisan({ forbid: true }))

app.use(async (ctx, next) => {
  // This will not run when hammer phone visit
  ctx.body = "Hello, Phone"
  await next()
})
```

当然，自定义返回信息也是可以的：

```javascript
import Koa from 'koa' // koa 2
import koaFuckSmartisan from 'fuck-smartisan/dist/koa-fuck-smartisan'

const SmartisanResponse = {
  status: 404,
  body: '锤子的销量不到 40 万，显然是一个可忽视的机型',
}

Vue.use(koaFuckSmartisan({ forbid: true, response: SmartisanResponse  }))
```

### 在命令行中使用

本项目提供了命令行工具，以便在 shell 中使用

```bash
$ is-smartisan --help

usage: is-smartisan [-i|<data>] [--help]

-i      接收标准输入
--help  显示帮助信息

example:
$ is-smartisan "Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; SM919 Build/MXB48T) Ap..."
$ cat user-agent.text | is-smartisan -i
```

示例：

```
NGX_LOG=/data/logs/nginx-access.log

while read LINE; do
  is-smartisan "$LINE" && push-black-list "$LINE" || push-white-list "$LINE"
done < "$NGX_LOG"
```

## 贡献代码

鉴于本人可能跟不上 TNT 用户的开发效率，所以提交 PR 的同时，请附上自己的屏幕截图，证明自己不是 TNT 用户。
