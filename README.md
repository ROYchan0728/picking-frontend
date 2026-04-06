# 拣货系统 — 前端 (Vercel)

## 部署步骤

### 1. 先完成后端部署
确保 Railway 后端已经部署好，并拿到后端地址，例如：
`https://picking-backend-xxx.up.railway.app`

### 2. 填入后端地址
打开 `config.js`，把地址填进去：

```js
window.BACKEND_URL = 'https://picking-backend-xxx.up.railway.app';
```

### 3. 上传到 GitHub
新建一个仓库（例如 `picking-frontend`），把这个文件夹的内容上传进去。

### 4. 部署到 Vercel
1. 打开 https://vercel.com，用 GitHub 登录
2. **New Project** → Import `picking-frontend`
3. 不需要任何设置，直接点 **Deploy**
4. 部署完成后，复制 Vercel 给你的地址，例如：`https://picking-app.vercel.app`

### 5. 把 Vercel 地址填回 Railway
回到 Railway → **Variables** → 把 `FRONTEND_URL` 设为你的 Vercel 地址。

---

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 完整前端，无需修改 |
| `config.js` | ⚠️ 只需改这一个文件，填入 Railway 地址 |
| `vercel.json` | Vercel 路由配置，不用动 |

---

## 给拣货员
把 Vercel 地址发给所有拣货员，手机浏览器打开即可。

**添加到主屏幕（变成 App 图标）：**
- iPhone：Safari 打开 → 点底部分享按钮 → 「添加到主屏幕」
- Android：Chrome 打开 → 右上角菜单 → 「添加到主屏幕」
