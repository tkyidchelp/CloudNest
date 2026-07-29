import { renderNavbar, renderFooter } from '/js/components.js'
import { isLoggedIn, logout, getCurrentUser, api } from '/js/api.js'

export function renderDashboardNavbar() {
  if (!isLoggedIn()) {
    window.location.href = '/pages/login.html'
    return
  }
  const user = getCurrentUser()

  return `
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <span class="gradient-text">CloudNest</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="dashboardNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="/pages/dashboard.html">概览</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/products.html">产品</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/pricing.html">价格</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/docs.html">文档</a></li>
        </ul>
        <div class="d-flex align-items-center gap-2">
          <button id="themeToggle" class="btn btn-sm btn-outline-secondary rounded-pill px-2" title="切换主题">
            <i class="bi bi-sun-fill"></i>
          </button>
          <span class="text-body-secondary small">${user?.email || ''}</span>
          <button id="logoutBtn" class="btn btn-sm btn-outline-glow rounded-pill px-3">退出</button>
        </div>
      </div>
    </div>
  </nav>
  `
}

export function renderDashboardLayout(activePage = 'overview') {
  document.getElementById('navbar-container').innerHTML = renderDashboardNavbar()
  document.getElementById('footer-container').innerHTML = renderFooter()

  const logoutBtn = document.getElementById('logoutBtn')
  if (logoutBtn) logoutBtn.addEventListener('click', logout)
}
