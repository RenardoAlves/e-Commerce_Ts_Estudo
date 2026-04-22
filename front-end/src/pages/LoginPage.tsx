import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {

    const navigate = useNavigate()
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()

        setError('')

        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password
            })

            const token = response.data.token

            login(token)

            navigate('/')

        } catch (err) {
            setError('Email ou senha inválidos')
        }
    }

    return (
        <div className="flex w-[98vw] justify-center p-20">
            <Card className="w-md">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button onClick={() => navigate('/signup')} variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2 mb-5">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && (
                        <div className="mt-[-10px]">
                            <p className="text-red-500 text-md">
                                {error}
                            </p>
                        </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default LoginPage;