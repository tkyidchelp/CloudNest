import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle')
  const html = document.documentElement
  const savedTheme = localStorage.getItem('theme') || 'dark'
  html.setAttribute('data-bs-theme', savedTheme)
  updateThemeIcon(savedTheme)

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-bs-theme')
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      html.setAttribute('data-bs-theme', newTheme)
      localStorage.setItem('theme', newTheme)
      updateThemeIcon(newTheme)
    })
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return
    const icon = themeToggle.querySelector('i')
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'
    }
  }

  // Speed test simulator
  const speedBtn = document.getElementById('speedTestBtn')
  if (speedBtn) {
    speedBtn.addEventListener('click', () => {
      const fill = document.getElementById('speedFill')
      const result = document.getElementById('speedResult')
      if (!fill || !result) return

      fill.style.width = '0%'
      result.textContent = '0 Mbps'
      speedBtn.disabled = true

      const targetSpeed = Math.floor(Math.random() * 500 + 300)
      let current = 0
      const interval = setInterval(() => {
        current += Math.floor(Math.random() * 30 + 10)
        if (current >= targetSpeed) {
          current = targetSpeed
          clearInterval(interval)
          speedBtn.disabled = false
        }
        fill.style.width = (current / 1000 * 100) + '%'
        result.textContent = current + ' Mbps'
      }, 80)
    })
  }

  // Price calculator
  const calcBtn = document.getElementById('calculateBtn')
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const cpu = parseInt(document.getElementById('cpuCores').value) || 2
      const ram = parseInt(document.getElementById('ramSize').value) || 4
      const disk = parseInt(document.getElementById('diskSize').value) || 50
      const bw = parseInt(document.getElementById('bandwidth').value) || 5

      const price = (cpu * 25 + ram * 15 + disk * 0.3 + bw * 20) * 0.85
      const monthly = price.toFixed(0)
      const yearly = (price * 12 * 0.7).toFixed(0)

      document.getElementById('monthlyPrice').textContent = monthly
      document.getElementById('yearlyPrice').textContent = yearly
      document.getElementById('priceResult').style.display = 'block'
    })
  }

  // Contact form
  const contactForm = document.getElementById('contactForm')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const toast = new bootstrap.Toast(document.getElementById('contactToast'))
      toast.show()
      contactForm.reset()
    })
  }
})
