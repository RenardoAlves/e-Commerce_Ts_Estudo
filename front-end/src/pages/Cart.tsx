import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import type { CartItem } from "../../../back-end/src/models/cart";
import axios from 'axios';

const Cart = () => {

    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const res = await fetch("/api/cart");
                const data = await res.json();
                setCart(data);
                console.log("DATA DA API:", data);
                console.log("CART STATE:", cart);
            } catch (err) {
                console.error("Erro ao carregar carrinho");
            } finally {
                setLoading(false);
            }
        }

        loadCart();

    }, []);

    const deletarItem = async (produto: any) => {
        try {
            const res = await axios.delete(`/api/cart/${produto.id}`)
            setCart(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const incrementarItem = async (produto: any, res: Request) => {
        try {
            const res = await axios.patch(`/api/cart/${produto.id}/increment`);
            setCart(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const subtrairItem = async (produto: any) => {
        try {
            const res = await axios.patch(`/api/cart/${produto.id}/subtract`);
            setCart(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const subtotal = cart.reduce((acc, item) => {
        return acc+ item.valor * item.quantidade;
    }, 0)


    return(
        <div className="bg-white mt-5 w-[97.5vw] py-8 px-15 flex flex-col rounded-md">
            <div className="bg-white w-full flex flex-row">
                <div className="basis-256 mr-10 bg-white flex flex-col gap-10">
                    { loading ? (
                    <Card>
                        <CardAction className="ml-2">Carregando...</CardAction>
                        <CardContent className="flex flex-row">
                            <div>Carregando...</div>
                            <div className="ml-auto">Carregando...</div>
                        </CardContent>
                        <CardDescription className="ml-2">Carregando</CardDescription>
                    </Card>
                    )
                    :
                    (
                    cart.map(produto => (
                    <Card key={produto.id}>
                        <CardAction className="ml-2">{produto.nome}</CardAction>
                        <CardContent className="flex flex-row">
                            <div><img src={produto.imagem} className="max-h-[80px]"></img></div>
                            <div className="ml-auto flex flex-col">
                                <p>Valor unitário: R${produto.valor}</p>
                                <Button onClick={() => deletarItem(produto)} className="hover:bg-red-400 ml-auto">Remover</Button>
                            </div>
                        </CardContent>
                        <CardDescription className="ml-2 flex flex-row gap-1">
                            <Button onClick={() => subtrairItem(produto)} size="icon-xs">-</Button>
                            <p>Quantidade: {produto.quantidade}</p>
                            <Button onClick={() => incrementarItem(produto)} size="icon-xs">+</Button>
                        </CardDescription>
                    </Card>
                    )))}
                </div>
                <div className="basis-128 bg-white ml-auto">
                    <Card>
                        <CardAction className="ml-4 text-lg">Detalhes do pagamento</CardAction>
                        <CardContent>
                            <div>Total de itens: {cart.length}</div>
                        </CardContent>
                        <CardFooter className="flex flex-col mr-auto">
                            <div className="mr-auto">Subtotal: R${subtotal}</div>
                            <div>Desconto no pix (10%): R${subtotal/10}</div>
                            <div className="mr-auto">Valor final: R${subtotal - subtotal/10}</div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="bg-white mt-10 w-full flex flex-row">
                <div className="ml-auto">
                    <Button className="text-lg p-5">
                        Finalizar pedido
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Cart;