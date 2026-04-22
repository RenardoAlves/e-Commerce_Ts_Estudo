import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
        </Routes>
    )
}

export default MainRoutes;