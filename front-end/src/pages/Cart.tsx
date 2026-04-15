import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter } from "@/components/ui/card";


const Cart = () => {
    return(
        <div className="bg-white mt-5 w-[97.5vw] py-8 px-15 flex flex-col">
            <div className="bg-white w-full flex flex-row">
                <div className="basis-256 mr-10 bg-gray-200">
                    <Card>
                        <CardAction className="ml-2">Produto x</CardAction>
                        <CardContent className="flex flex-row">
                            <div>Detalhes do produto</div>
                            <div className="ml-auto">Valor do produto</div>
                        </CardContent>
                        <CardDescription className="ml-2">Descrição do produto</CardDescription>
                    </Card>
                </div>
                <div className="basis-128 bg-gray-200 ml-auto">
                    <Card>
                        <CardAction>Detalhes do pagamento</CardAction>
                        <CardContent>
                            <div>Valor x</div>
                            <div>Valor y</div>
                        </CardContent>
                        <CardFooter>Valor final: ...</CardFooter>
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