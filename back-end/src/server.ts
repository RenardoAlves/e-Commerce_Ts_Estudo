import 'dotenv/config';
import express from "express";
import cors from 'cors';
import cartRoutes from "./routes/cart.routes.ts";
import authRoutes from "./routes/auth.routes.ts";

const app = express();

app.use(cors({
    origin: 'https://e-commerce-ts-estudo-21p1.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});