import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { PublicRoute } from './routes/PublicRoutes';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route element={<PublicRoute />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;