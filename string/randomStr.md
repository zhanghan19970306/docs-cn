---
outline: deep
---

# randomStr

生成6位随机字符串

## 源码

### Typescript

```typescript
const randomStr = () => Math.random().toString(36).slice(-6)
```

### Javascript

```javascript
const randomStr = () => Math.random().toString(36).slice(-6)
```

## 例子

```javascript
import { randomStr } from "@qmai/qutils";

randomStr(); // => 'keh9ik'
```
