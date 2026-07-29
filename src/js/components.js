export function renderNavbar(activePage = 'home') {
  const token = localStorage.getItem('token')
  let user = null
  try { user = JSON.parse(localStorage.getItem('user')) } catch {}
  const isAdmin = user?.role === 'admin'

  const pages = [
    { id: 'home', name: '首页', href: '/' },
    { id: 'products', name: '产品', href: '/pages/products.html' },
    { id: 'pricing', name: '价格', href: '/pages/pricing.html' },
    { id: 'docs', name: '文档', href: '/pages/docs.html' },
    { id: 'about', name: '关于', href: '/pages/about.html' },
    { id: 'contact', name: '联系', href: '/pages/contact.html' },
  ]

  return `
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <span class="gradient-text">CloudNest</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          ${pages.map(p => `
            <li class="nav-item">
              <a class="nav-link ${p.id === activePage ? 'active' : ''}" href="${p.href}">${p.name}</a>
            </li>
          `).join('')}
        </ul>
        <div class="d-flex align-items-center gap-2">
          <button id="themeToggle" class="btn btn-sm btn-outline-secondary rounded-pill px-2" title="切换主题">
            <i class="bi bi-sun-fill"></i>
          </button>
          ${token ? `
            ${isAdmin ? '<a href="/pages/admin.html" class="btn btn-sm btn-outline-warning rounded-pill px-3">管理后台</a>' : ''}
            <a href="/pages/dashboard.html" class="btn btn-sm btn-outline-glow rounded-pill px-3">控制台</a>
          ` : `
            <a href="/pages/login.html" class="btn btn-sm btn-outline-glow rounded-pill px-3">登录</a>
            <a href="/pages/login.html?tab=register" class="btn btn-sm btn-primary-glow rounded-pill px-3">免费试用</a>
          `}
        </div>
      </div>
    </div>
  </nav>
  `
}

export function renderFooter() {
  return `
  <footer class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <h5 class="gradient-text fw-bold mb-3">CloudNest</h5>
          <p class="text-body-secondary mb-0" style="max-width: 320px;">
            新一代混合型 IDC 平台，提供云服务器、物理托管、安全防护一站式解决方案。
          </p>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">产品</h6>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/pages/products.html" class="text-body-secondary text-decoration-none">云服务器</a></li>
            <li class="mb-2"><a href="/pages/products.html" class="text-body-secondary text-decoration-none">物理托管</a></li>
            <li class="mb-2"><a href="/pages/products.html" class="text-body-secondary text-decoration-none">安全防护</a></li>
            <li class="mb-2"><a href="/pages/products.html" class="text-body-secondary text-decoration-none">CDN 加速</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">支持</h6>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/pages/docs.html" class="text-body-secondary text-decoration-none">帮助文档</a></li>
            <li class="mb-2"><a href="/pages/docs.html" class="text-body-secondary text-decoration-none">API 参考</a></li>
            <li class="mb-2"><a href="/pages/contact.html" class="text-body-secondary text-decoration-none">提交工单</a></li>
            <li class="mb-2"><a href="#" class="text-body-secondary text-decoration-none">系统状态</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">公司</h6>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/pages/about.html" class="text-body-secondary text-decoration-none">关于我们</a></li>
            <li class="mb-2"><a href="#" class="text-body-secondary text-decoration-none">新闻动态</a></li>
            <li class="mb-2"><a href="#" class="text-body-secondary text-decoration-none">合作伙伴</a></li>
            <li class="mb-2"><a href="/pages/contact.html" class="text-body-secondary text-decoration-none">联系我们</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">法律</h6>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/pages/terms.html" class="text-body-secondary text-decoration-none">服务协议</a></li>
            <li class="mb-2"><a href="/pages/privacy.html" class="text-body-secondary text-decoration-none">隐私政策</a></li>
            <li class="mb-2"><a href="/pages/sla.html" class="text-body-secondary text-decoration-none">SLA 承诺</a></li>
            <li class="mb-2"><a href="/pages/aup.html" class="text-body-secondary text-decoration-none">使用政策</a></li>
          </ul>
        </div>
      </div>
      <hr class="my-4 opacity-10">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p class="text-body-secondary small mb-0">&copy; 2026 CloudNest. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `
}

export function injectLayout(activePage) {
  document.getElementById('navbar-container').innerHTML = renderNavbar(activePage)
  document.getElementById('footer-container').innerHTML = renderFooter()
}
