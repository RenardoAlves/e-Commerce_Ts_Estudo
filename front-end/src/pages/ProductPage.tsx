import { useParams } from "react-router-dom"
import produtos from "../../../back-end/produtosTeste";
import { Button } from "@/components/ui/button";

const ProductPage = () => {

  const { id } = useParams();

  const produto = produtos.find(p => p.id === Number(id));

  return(
    <div className="bg-white mt-5 w-[97.5vw] py-8 px-15 flex flex-row">
      <div className="bg-gray-300 p-20 flex-initial">
        <img className="h-[500px]" src={produto?.imagem}></img>
      </div>
      <div className="mx-10">
        <div className="bg-gray-200 p-5">
          <p>{produto?.descricao}</p>
        </div>
        <div className="p-5">
          <p>Valor: R${produto?.valor}</p>
        </div>
        <Button className="bg-green-400 hover:bg-green-600 p-5 text-lg my-5">Adicionar ao carrinho</Button>
      </div>
    </div>
  )
}

export default ProductPage;