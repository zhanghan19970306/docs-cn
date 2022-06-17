---
outline: deep
---

# env

环境对象

## isIos

当前是否处于ios环境
### 源码

```typescript
const isIos = /iphone|ipad|ipod|ios/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isIos } from "@qmai/qutils";

isIos // => true | false
```

## isAndroid

当前是否处于Android环境
### 源码

```typescript
const isAndroid = /android/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isAndroid } from "@qmai/qutils";

isAndroid // => true | false
```


## isWindows

当前是否处于Windows环境
### 源码

```typescript
const isWindows = /windows|win32|win64/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isWindows } from "@qmai/qutils";

isWindows // => true | false
```


## isMac

当前是否处于mac环境
### 源码

```typescript
const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isMac } from "@qmai/qutils";

isMac // => true | false
```


## isIpad

当前是否处于mac环境
### 源码

```typescript
const isIpad = /iphone|ipad|ipod|ios|macintosh|mac os x/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isIpad } from "@qmai/qutils";

isIpad // => true | false
```

## isWechatBrowser

当前是否处于 微信浏览器环境
### 源码

```typescript
const isWechatBrowser = /micromessenger/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isWechatBrowser } from "@qmai/qutils";

isWechatBrowser // => true | false
```

## isAliapyBrowser

当前是否处于 支付宝浏览器环境
### 源码

```typescript
const isAliapyBrowser = /alipay/i.test(navigator.userAgent)
```

### 例子

```javascript
import { isAliapyBrowser } from "@qmai/qutils";

isAliapyBrowser // => true | false
```

## parentDomain

当前是否处于 支付宝浏览器环境
### 源码

```typescript
const parentDomain = window.location.hostname.split(".").slice(1).join('.')
```

### 例子

```javascript
import { parentDomain } from "@qmai/qutils";

parentDomain // => true | false
```