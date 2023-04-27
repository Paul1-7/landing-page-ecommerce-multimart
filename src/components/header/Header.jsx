import { Container, Row } from 'reactstrap';
import './header.css';
import logo from '~/assets/images/eco-logo.png';
import userIcon from '~/assets/images/user-icon.png';
import { NavLink } from 'react-router-dom';
import { PATHS } from '~/routes/paths';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalAmountCart } from '~/redux/slices/cartSlice';

const navLinks = [
  {
    path: PATHS.home,
    displayName: 'Home'
  },
  {
    path: PATHS.shop,
    displayName: 'Shop'
  },
  {
    path: PATHS.cart,
    displayName: 'Cart'
  }
];

const Header = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity } = useSelector(({ cart }) => cart);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (!cartItems.length) return;

    dispatch(totalAmountCart());
  }, [cartItems]);

  const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu');
    setIsOpen(!isOpen);
  };

  return (
    <header className="header sticky__header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <nav className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {navLinks.map(({ path, displayName }, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={path}
                        className={(navClass) => (navClass.isActive ? 'nav__active' : '')}>
                        {displayName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-2-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="user icon" />{' '}
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
