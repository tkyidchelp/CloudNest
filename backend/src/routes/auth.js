import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateToken } from '../middleware/auth.js'
import { users } from '../data/store.js'

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { email, phone, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: '邮箱和密码不能为空' })
    }
    if (password.length < 8) {
      return res.status(400).json({ error: '密码至少需要 8 位' })
    }

    const existing = users.find(u => u.email === email)
    if (existing) {
      return res.status(409).json({ error: '该邮箱已被注册' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const role = users.length === 0 ? 'admin' : 'user'
    const user = {
      id: uuidv4(),
      email,
      phone: phone || '',
      password: hashedPassword,
      role,
      status: 'active',
      createdAt: new Date().toISOString(),
    }
    users.push(user)

    const token = generateToken(user)
    res.status(201).json({
      token,
      user: { id: user.id, email: user.email, phone: user.phone, role: user.role, createdAt: user.createdAt },
    })
  } catch {
    res.status(500).json({ error: '注册失败，请稍后重试' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: '邮箱和密码不能为空' })
    }

    const user = users.find(u => u.email === email)
    if (!user) {
      return res.status(401).json({ error: '邮箱或密码错误' })
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return res.status(401).json({ error: '邮箱或密码错误' })
    }

    const token = generateToken(user)
    res.json({
      token,
      user: { id: user.id, email: user.email, phone: user.phone, role: user.role, createdAt: user.createdAt },
    })
  } catch {
    res.status(500).json({ error: '登录失败，请稍后重试' })
  }
})

export default router
