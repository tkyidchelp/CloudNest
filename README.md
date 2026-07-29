# CloudNest - 混合型 IDC 平台

新一代混合型 IDC 平台官网，提供云服务器、物理机托管、安全防护、CDN 加速一站式解决方案。

## 在线预览

部署到 Cloudflare Pages 或 Vercel 即可访问。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Vite 8 + Bootstrap 5.3 (Sass) + Bootstrap Icons |
| 后端 | Node.js + Express.js |
| 认证 | JWT (JSON Web Token) |
| 部署 | Cloudflare Pages / Workers |

## 项目结构

```
├── src/                        # 前端源码
│   ├── index.html              # 首页
│   ├── pages/
│   │   ├── login.html          # 登录 / 注册
│   │   ├── dashboard.html      # 用户控制台（需登录）
│   │   ├── pricing.html        # 价格套餐 + 计算器
│   │   ├── products.html       # 产品展示
│   │   ├── contact.html        # 联系我们
│   │   ├── about.html          # 关于我们
│   │   └── docs.html           # 帮助文档
│   ├── js/
│   │   ├── api.js              # API 封装 + Token 管理
│   │   ├── dashboard.js        # 控制台布局
│   │   ├── components.js       # 导航栏 / 页脚
│   │   └── main.js             # 主题切换 / 测速 / 计算器
│   └── scss/styles.scss        # Bootstrap + 自定义主题
├── backend/                    # 后端源码
│   └── src/
│       ├── index.js            # Express 入口
│       ├── routes/
│       │   ├── auth.js         # 登录 / 注册
│       │   ├── products.js     # 产品 / 套餐
│       │   ├── contact.js      # 联系表单
│       │   └── user.js         # 用户信息 / 统计
│       ├── middleware/auth.js  # JWT 鉴权
│       └── data/products.js    # 产品数据
├── public/
│   ├── _headers                # Cloudflare Pages 安全头
│   └── _redirects              # SPA 路由回退
├── vite.config.js              # 前端构建 + 反向代理
├── wrangler.toml               # Cloudflare Workers 配置
├── dev.sh                      # 一键启动脚本
└── project.md                  # 项目需求文档
```

## 快速开始

### 安装依赖

```bash
npm install
cd backend && npm install && cd ..
```

### 开发模式

```bash
./dev.sh
```

或分别启动：

```bash
# 终端 1 - 后端
cd backend && npm run dev

# 终端 2 - 前端
npm run dev
```

前端运行在 `localhost:3000`，后端运行在 `localhost:3001`，Vite 自动将 `/api` 请求代理到后端。

### 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## API 端点

| 方法 | 路径 | 说明 | 鉴权 |
|------|------|------|------|
| `GET` | `/api/health` | 健康检查 | - |
| `POST` | `/api/auth/register` | 用户注册 | - |
| `POST` | `/api/auth/login` | 用户登录 | - |
| `GET` | `/api/products/list` | 产品列表 | - |
| `GET` | `/api/products/pricing` | 套餐价格 | - |
| `POST` | `/api/contact/submit` | 联系表单提交 | - |
| `GET` | `/api/user/profile` | 用户信息 | JWT |
| `GET` | `/api/user/stats` | 用户概览统计 | JWT |

## 功能特性

- 明暗主题切换（localStorage 持久化）
- 网络测速动画演示
- 价格计算器（实时估算月付/年付）
- 用户注册 / 登录（JWT 认证）
- 控制台仪表盘（鉴权后访问）
- 联系表单提交 + Toast 反馈
- FAQ 手风琴
- 全响应式设计（移动端至桌面端）
- Cloudflare Pages / Workers 适配

## 部署到 Cloudflare

### 前端 (Cloudflare Pages)

1. 构建项目：`npm run build`
2. 在 Cloudflare Pages 中上传 `dist/` 目录
3. 或关联 GitHub 仓库自动构建，构建命令 `npm run build`，输出目录 `dist`

### 后端 (Cloudflare Workers)

将 `backend/` 改造为 Worker 入口，或部署为独立 Node.js 服务。

## License

MIT
