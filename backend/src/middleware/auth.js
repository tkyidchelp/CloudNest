import jwt from 'jsonwebtoken'
import { users } from '../data/store.js'

const JWT_SECRET = process.env.JWT_SECRET || 'cloudnest-idc-platform-secret-key-2026'
const JWT_EXPIRES = '7d'

export function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES })
}

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录，请先登录' })
  }

  try {
    const token = header.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    return res.status(401).json({ error: '登录已过期，请重新登录' })
  }
}

export function adminMiddleware(req, res, next) {
  authMiddleware(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: '无权限访问' })
    }
    next()
  })
}
