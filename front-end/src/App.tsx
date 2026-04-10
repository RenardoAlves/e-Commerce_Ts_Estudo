import Layout from "./components/ui/Layout"
import MainRoutes from "./routes"
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes/>
      </Layout>
    </BrowserRouter>
  )
}

export default App