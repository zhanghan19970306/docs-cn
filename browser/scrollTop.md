---
outline: deep
---

# scrollTop

平滑滚动至顶部

## 源码

### Typescript

```typescript
const scrollTop = (element?: HTMLElement) => {
  if (typeof element === 'undefined') {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(() => scrollTop())
      window.scrollTo(0, c - c / 8)
    }
  } else {
    const c = element.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(() => scrollTop(element))
      element.scrollTo(0, c - c / 8)
    }
  }
}
```

## 例子

```javascript
import { scrollTop } from "@qmai/qutils";

scrollTop() 
```
