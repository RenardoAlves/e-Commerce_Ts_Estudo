import prisma from '../lib/prisma.ts'
import bcrypt from 'bcrypt'
import type { Request, Response } from 'express'

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await prisma.user.findUnique({
            where: { email }
        })

        if (userExists) {
            return res.status(400).json({ error: 'Email já existe' })
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash
            }
        })

        return res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro no registro' })
    }
}