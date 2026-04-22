import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu"
import { useAuth } from "../../context/AuthContext"
import { Button } from "./button";

const Header = () => {

    const { isLoggedIn, logout } = useAuth()

    return (
        <div className="w-[97.5vw] bg-white rounded-md">
            <NavigationMenu className="max-w-full">
                <div className="flex grow justify-between px-10 py-2">
                    <NavigationMenuList className="flex gap-20 h-12">
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link to={"/"}>Início</Link>
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
                        {isLoggedIn ? (
                                <NavigationMenuItem>
                                    <NavigationMenuLink>
                                        <Button variant="link" onClick={logout}>Logout</Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                        ) : (
                            <>
                                <NavigationMenuItem>
                                    <NavigationMenuLink>
                                        <Link to='/login'>Login</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink>
                                        <Link to='/signup'>Registrar</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </>
                        )}
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link to={'/cart'}><img className="max-h-[30px]" src="/images/carrinho.png"></img></Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            </NavigationMenu>
        </div>
    )
}

export default Header;