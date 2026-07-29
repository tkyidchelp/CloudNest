import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import contactRoutes from './routes/contact.js'
import userRoutes from './routes/user.js'
import adminRoutes from './routes/admin.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: true,
  credentials: true,
}))

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes)

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
