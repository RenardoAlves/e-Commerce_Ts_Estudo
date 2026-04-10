import { Button } from "@/components/ui/button";
import produtos from "../../../back-end/produtosTeste";
import { Card, CardAction, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="bg-white mt-5 w-[97.5vw] py-8 px-15 flex flex-col justify-center items-center">
                <p className="mb-7">Confira nosso estoque</p>
                <img src="./img/card-principal-roupas.jpeg" className="max-w-250"></img>
                <p className="p-10">Produtos</p>
                <div className="grid grid-cols-4 gap-20">
                    {produtos.map((produto) => (
                        <Card key={produto.id} className="bg-grey p-10">
                            <CardTitle>{produto.nome}</CardTitle>
                            <CardDescription>{produto.descricao}</CardDescription>
                            <CardFooter>
                                <Button>
                                    <Link to={`/product/${produto.id}`}>Ver Detalhes</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;