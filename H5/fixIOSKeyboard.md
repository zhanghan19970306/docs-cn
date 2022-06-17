---
outline: deep
---

# fixIOSKeyboard

修复Ios下原生键盘上推 导致webview错位问题

## 源码

### Typescript

```typescript
function fixIOSKeyboard() {
  // 计数器
  let timer: number = -1

  // 判断是否是 input/textarea 表单元素
  const isInputEle = (e: FocusEvent) => {
    const element = e.target as HTMLElement
    const tagName = element?.tagName.toLowerCase() || ''
    return tagName === 'input' || tagName === 'textarea'
  }

  // 聚焦时机
  document.body.addEventListener('focusout', e => {
    if (isInputEle(e)) {
      timer = window.setTimeout(() => {
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
        window.scrollTo(0, Math.max(scrollHeight - 1, 0))
      }, 0)
    }
  })

  // 失焦时机
  document.body.addEventListener('focusin', e => {
    isInputEle(e) && window.clearTimeout(timer)
  })
}
```

### Javascript

```javascript
function fixIOSKeyboard() {
  // 计数器
  let timer = -1

  // 判断是否是 input/textarea 表单元素
  const isInputEle = (e) => {
    const element = e.target as HTMLElement
    const tagName = element?.tagName.toLowerCase() || ''
    return tagName === 'input' || tagName === 'textarea'
  }

  // 聚焦时机
  document.body.addEventListener('focusout', e => {
    if (isInputEle(e)) {
      timer = window.setTimeout(() => {
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
        window.scrollTo(0, Math.max(scrollHeight - 1, 0))
      }, 0)
    }
  })

  // 失焦时机
  document.body.addEventListener('focusin', e => {
    isInputEle(e) && window.clearTimeout(timer)
  })
}
```

## 例子

```javascript
import { browerEnv, fixIOSKeyboard } from "@qmai/qutils";

// ios环境 修复页面键盘上推bug
browerEnv.isIos && fixIOSKeyboard()
```