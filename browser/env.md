---
outline: deep
---

# env

环境对象

## 源码

### Typescript

```typescript
const env = Object.create(null)

env.isIos = /iphone|ipad|ipod|ios/i.test(navigator.userAgent)
env.isAndroid = /android/i.test(navigator.userAgent)
env.isWindows = /windows|win32|win64/i.test(navigator.userAgent)
env.isMac = /macintosh|mac os x/i.test(navigator.userAgent)
env.isIpad = /iphone|ipad|ipod|ios|macintosh|mac os x/i.test(navigator.userAgent)
env.isWechatBrowser = /micromessenger/i.test(navigator.userAgent)
env.isAliapyBrowser = /alipay/i.test(navigator.userAgent)
env.parentDomain = window.location.hostname.split(".").slice(1).join('.')
```

## 例子

```javascript
import { env } from "@qmai/qutils";

env.isMac // => true | false
```
