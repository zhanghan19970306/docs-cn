---
outline: deep
---

# createUuid

生成32位uuid

## 源码

### Typescript

```typescript
const createUuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
```

### Javascript

```javascript
const createUuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
```

## 例子

```javascript
import { createUuid } from "@qmai/qutils";

createUuid(); // => 'c5d98864-909c-4786-83f3-b0f06b605cc7'
```
