# CloudNest IDC 平台官网

## 项目概述

CloudNest 是面向混合型 IDC 业务的企业官网，提供云服务器、物理机托管、安全防护、CDN 加速等一站式解决方案的在线展示与客户服务入口。

## 技术栈

- **构建工具**: Vite 8.x
- **UI 框架**: Bootstrap 5.3 (Sass)
- **图标**: Bootstrap Icons 1.11
- **语言**: HTML5 + JavaScript (ES Module)

## 业务定位

混合型 IDC 平台，覆盖云计算 + 物理托管 + 安全防护 + CDN 加速。

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/index.html` | Hero 区、产品演示（测速）、套餐预览、客户案例、CTA |
| 产品展示 | `/pages/products.html` | 云服务器 ECS、物理机托管 BMS、安全防护 Shield、CDN 加速 四大产品线详细介绍 |
| 价格套餐 | `/pages/pricing.html` | 价格计算器 + 三档套餐对比 + 定制方案入口 |
| 关于我们 | `/pages/about.html` | 公司使命、数据展示、机房环境（电力/温控/安防/消防）、资质认证 |
| 联系我们 | `/pages/contact.html` | 联系方式、联系表单、常见问题 |
| 帮助文档 | `/pages/docs.html` | 快速入门、产品文档、API 参考、FAQ 手风琴 |
| 用户中心 | `/pages/login.html` | 登录/注册切换、支持 ?tab=register 参数直达注册页 |

## UI 设计

- **风格**: 现代 SaaS 风格，深色为主（支持明暗切换）
- **主色调**: Indigo (#6366f1) + Cyan (#06b6d4) 渐变
- **组件特征**: 毛玻璃效果卡片、渐变按钮、动画背景光效、统一的圆角与留白
- **响应式**: 基于 Bootstrap 断点，适配移动端到桌面端

## 交互功能

1. **主题切换**: localStorage 持久化，按钮切换明/暗模式
2. **网络测速**: 模拟下载速度动画演示
3. **价格计算器**: 根据 CPU/内存/磁盘/带宽实时估算月付和年付价格
4. **联系表单**: 提交后 Toast 提示
5. **FAQ 手风琴**: Bootstrap Accordion 组件
6. **注册跳转**: URL 参数 `?tab=register` 直接激活注册标签

## 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```
