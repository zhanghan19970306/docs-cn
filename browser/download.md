---
outline: deep
---

# download

重命名下载文件

## 源码

### Typescript

```typescript
const download = (url: string, filename?: string) =>
  new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.responseType = 'blob'
        xhr.onload = () => {
            if (xhr.status === 200) {
                const link = document.createElement('a')
                const body = document.querySelector('body')

                link.href = window.URL.createObjectURL(xhr.response)
                if (filename) link.download = filename

                // fix Firefox
                link.style.display = 'none'
                body.appendChild(link)

                link.click()
                body.removeChild(link)

                window.URL.revokeObjectURL(link.href)

                resolve('ok')
            } else {
                reject(xhr.responseText)
            }
        }
        xhr.send()
    })
```

## 例子

```javascript
import { download } from "@qmai/qutils";

download("http:xxxxxxxx/.jpg", "这是一张图像.jpg")
```
