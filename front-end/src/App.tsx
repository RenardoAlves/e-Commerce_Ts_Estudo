import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import produtos from "../../back-end/produtosTeste"
import "./styles.css"

export function App() {
  return (
    <div className="flex min-h-svh p-6 bg-gray-900">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <div className="w-[97.5vw] bg-white rounded-md">
            <NavigationMenu className="max-w-full">
              <div className="flex grow justify-between px-10 py-2">
              <NavigationMenuList className="flex gap-20">
                {/*<div className="flex gap-20">*/}
                <NavigationMenuItem>
                  <NavigationMenuLink>Início</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Categorias 1</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Categorias 2</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Categorias 3</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Categorias 4</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/*</div>*/}
              {/*<div className="flex gap-20">*/}
              <NavigationMenuList className="flex gap-20">
                <NavigationMenuItem>
                  <NavigationMenuLink>Login</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Registrar</NavigationMenuLink>
                </NavigationMenuItem>
                {/*</div>*/}
              </NavigationMenuList>
              </div>
            </NavigationMenu>
          </div>
          <div className="bg-white mt-5 w-[97.5vw] py-8 px-15 flex flex-col justify-center items-center">
              <p className="mb-7">Confira nosso estoque</p>
              <img src="./img/card-principal-roupas.jpeg" className="max-w-250"></img>
              <p className="p-10">Produtos</p>
              <div className="grid grid-cols-4 gap-20">
                {produtos.map((produto) => (
                  <Card key={produto.id} className="bg-grey p-10">
                    <CardTitle>{produto.nome}</CardTitle>
                    <CardDescription>{produto.descricao}</CardDescription>
                    <CardAction>Ver Detalhes</CardAction>
                  </Card>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
