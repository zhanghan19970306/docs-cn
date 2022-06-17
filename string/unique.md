---
outline: deep
---

# unique

生成唯一字符串的方法

## randomStr

生成6位随机字符串


### 源码

```typescript
const randomStr = () => Math.random().toString(36).slice(-6)
```

### 例子

```javascript
import { randomStr } from "@qmai/qutils";

randomStr(); // => 'keh9ik'
```

## createUuid

生成32位uuid


### 源码

```typescript
const createUuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
```

### 例子

```javascript
import { createUuid } from "@qmai/qutils";

createUuid(); // => 'c5d98864-909c-4786-83f3-b0f06b605cc7'
```

## createNanoid

创建固定长度的 Nanoid

### 源码

```typescript
const createNanoid = (size = 21) => {
  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
  let id = ''
  let i = size
  while (i--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}
```

### 例子

```javascript
import { createNanoid } from "@qmai/qutils";

createNanoid(); // => 'AfRTJv9hRo42vKKUDBQLX'
```


