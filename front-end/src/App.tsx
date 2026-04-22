import Layout from "./components/ui/Layout"
import MainRoutes from "./routes"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext"

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App