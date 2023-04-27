import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import Shop from '~/pages/Shop';
import Signup from '~/pages/Signup';
import { PATHS } from './paths';

const Routers = () => {
  return (
    <Routes>
      <Route path={PATHS.default} element={<Navigate to={PATHS.home} />} />
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.shop} element={<Shop />} />
      <Route path={PATHS.productDetail} element={<ProductDetail />} />
      <Route path={PATHS.cart} element={<Cart />} />
      <Route path={PATHS.checkout} element={<Checkout />} />
      <Route path={PATHS.login} element={<Login />} />
      <Route path={PATHS.signup} element={<Signup />} />
    </Routes>
  );
};

export default Routers;
