import { Router } from 'express'
import { register } from '../controllers/register.controller.ts'
import { login } from '../controllers/login.controller.ts'
import { auth } from '../middlewares/auth.ts'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/profile', auth, (req, res) => {
    return res.json({
        message: 'Acesso autorizado',
        userId: req.userId
    })
})

export default router