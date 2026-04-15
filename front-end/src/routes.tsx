import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default MainRoutes;