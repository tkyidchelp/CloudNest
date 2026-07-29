import { Router } from 'express'

const router = Router()

const submissions = []

router.post('/submit', (req, res) => {
  try {
    const { name, email, company, phone, type, message } = req.body

    if (!name || !email || !type || !message) {
      return res.status(400).json({ error: '请填写必填字段' })
    }

    const submission = {
      id: submissions.length + 1,
      name,
      email,
      company: company || '',
      phone: phone || '',
      type,
      message,
      createdAt: new Date().toISOString(),
    }

    submissions.push(submission)
    console.log('New contact submission:', JSON.stringify(submission, null, 2))

    res.status(201).json({ message: '提交成功，我们将在 1 个工作日内与您联系', id: submission.id })
  } catch {
    res.status(500).json({ error: '提交失败，请稍后重试' })
  }
})

export default router
