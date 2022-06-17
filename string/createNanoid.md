---
outline: deep
---

# createUuid

创建固定长度的 Nanoid

## 源码

### Typescript

```typescript
const createNanoid = (size = 21) => {
  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
  let id = ''
  let i = size
  while (i--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}
```

### Javascript

```javascript
const createNanoid = (size = 21) => {
  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
  let id = ''
  let i = size
  while (i--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}
```

## 例子

```javascript
import { createNanoid } from "@qmai/qutils";

createNanoid(); // => 'AfRTJv9hRo42vKKUDBQLX'
```
