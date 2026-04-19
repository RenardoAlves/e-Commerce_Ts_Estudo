import 'dotenv/config';
import express from "express";
import cartRoutes from "./routes/cart.routes.ts";
import authRoutes from "./routes/auth.routes.ts";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});