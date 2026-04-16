import type { Request, Response } from "express";
import { cart } from "../data/cartDb.ts";

import produtos from "../data/produtosTeste.ts";

export const getCart = (req: Request, res: Response) => {
    res.json(cart);
};

export const addItem = (req: Request, res: Response) => {
    const { id } = req.body;

    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" })
    }

    const existing = cart.find(p => p.id === id);

    if (existing) {
        existing.quantidade += 1;
    } else {
        cart.push({...produto, quantidade: 1});
    }

    res.json(cart);
};

export const removeItem = (req: Request, res: Response) => {
    const { id } = req.params;

    const index = cart.findIndex(p => p.id === Number(id));

    if (index !== -1) {
        cart.splice(index, 1);
    }

    res.json(cart);
};