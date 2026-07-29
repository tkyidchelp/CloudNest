import { Router } from 'express'
import { users, contactSubmissions } from '../data/store.js'
import { adminMiddleware } from '../middleware/auth.js'

const router = Router()

router.use(adminMiddleware)

// Stats
router.get('/stats', (_req, res) => {
  const totalUsers = users.length
  const activeUsers = users.filter(u => u.status === 'active').length
  const totalContacts = contactSubmissions.length
  const pendingContacts = contactSubmissions.filter(c => c.status === 'pending').length
  const adminUsers = users.filter(u => u.role === 'admin').length

  res.json({
    users: { total: totalUsers, active: activeUsers, admin: adminUsers },
    contacts: { total: totalContacts, pending: pendingContacts },
    resources: { total: 0, running: 0 },
  })
})

// User management
router.get('/users', (_req, res) => {
  const list = users.map(u => ({
    id: u.id, email: u.email, phone: u.phone, role: u.role,
    status: u.status, createdAt: u.createdAt,
  }))
  res.json({ users: list })
})

router.patch('/users/:id/role', (req, res) => {
  const user = users.find(u => u.id === req.params.id)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  const { role } = req.body
  if (!['admin', 'user'].includes(role)) return res.status(400).json({ error: '无效的角色' })
  if (user.id === req.user.id) return res.status(400).json({ error: '不能修改自己的角色' })
  user.role = role
  res.json({ message: '角色已更新' })
})

router.patch('/users/:id/status', (req, res) => {
  const user = users.find(u => u.id === req.params.id)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  const { status } = req.body
  if (!['active', 'disabled'].includes(status)) return res.status(400).json({ error: '无效的状态' })
  if (user.id === req.user.id) return res.status(400).json({ error: '不能修改自己的状态' })
  user.status = status
  res.json({ message: '状态已更新' })
})

// Contact management
router.get('/contacts', (_req, res) => {
  res.json({ contacts: contactSubmissions })
})

router.patch('/contacts/:id/status', (req, res) => {
  const contact = contactSubmissions.find(c => c.id === parseInt(req.params.id))
  if (!contact) return res.status(404).json({ error: '留言不存在' })
  const { status } = req.body
  if (!['pending', 'processed', 'closed'].includes(status)) return res.status(400).json({ error: '无效的状态' })
  contact.status = status
  contact.processedAt = new Date().toISOString()
  res.json({ message: '状态已更新' })
})

export default router
