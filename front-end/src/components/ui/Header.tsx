import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu"

const Header = () => {
    return (
        <div className="w-[97.5vw] bg-white rounded-md">
                        <NavigationMenu className="max-w-full">
                            <div className="flex grow justify-between px-10 py-2">
                                <NavigationMenuList className="flex gap-20 h-12">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink>
                                            <Link to="/">Início</Link>
                                        </NavigationMenuLink>
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
                                <NavigationMenuList className="flex gap-20 h-12">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink>Login</NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink>Registrar</NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink>
                                            <img className="max-h-[30px]" src="/images/carrinho.png"></img>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </div>
                        </NavigationMenu>
                    </div>
    )
}

export default Header;