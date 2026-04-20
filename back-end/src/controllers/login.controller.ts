import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma  from '../lib/prisma.ts';
import type { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' }
        )

        return res.json({ token })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro no login' })
    }
}