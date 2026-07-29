import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.js'
import { users } from '../data/store.js'

const router = Router()

router.get('/profile', authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id)
  res.json({
    user: {
      id: req.user.id,
      email: req.user.email,
      role: user?.role || 'user',
    },
  })
})

router.get('/stats', authMiddleware, (_req, res) => {
  res.json({
    resources: { total: 0, running: 0, stopped: 0 },
    billing: { balance: 0, thisMonth: 0, lastMonth: 0 },
    tickets: { open: 0, total: 0 },
  })
})

export default router
