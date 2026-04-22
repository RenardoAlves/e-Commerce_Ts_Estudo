import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const PublicRoute = ({ children } : any) => {
    const { isLoggedIn } = useAuth()

    if (isLoggedIn) {
        return <Navigate to="/"/>
    }

    return children
}