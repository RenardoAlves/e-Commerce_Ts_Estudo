import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const PublicRoute = () => {
    const { isLoggedIn } = useAuth()

    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />
}