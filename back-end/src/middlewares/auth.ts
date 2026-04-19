import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface JwtPayload {
    id: string
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não enviado' })
    }

    const parts = authHeader.split(' ')

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Token mal formatado' })
    }

    const token = parts[1]

    if (!token) {
        return res.status(401).json({ error: 'Token inválido' })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload

        req.userId = decoded.id

        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({ error: 'Token inválido' })
    }
}