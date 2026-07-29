import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.js'
import { products, resources } from '../data/products.js'

const router = Router()

router.get('/list', (_req, res) => {
  res.json({ products })
})

router.get('/pricing', (_req, res) => {
  res.json({ products: products.map(p => ({ id: p.id, name: p.name, price: p.price, description: p.description })) })
})

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id)
  if (!product) return res.status(404).json({ error: '产品不存在' })
  res.json({ product })
})

router.get('/user/resources', authMiddleware, (req, res) => {
  const userResources = resources.filter(r => r.userId === req.user.id)
  res.json({ resources: userResources })
})

export default router
