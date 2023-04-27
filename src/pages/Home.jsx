import { Col, Container, Row } from 'reactstrap';
import '~/styles/home.css';
import Helmet from '~/components/helmet/Helmet';
import heroImg from '~/assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { PATHS } from '~/routes/paths';
import { motion } from 'framer-motion';
import Services from '~/components/services/Services';
import ProductsList from '~/components/UI/ProductsList';
import dataProducts from '~/assets/data/products';
import { useEffect, useState } from 'react';
import counterImg from '~/assets/images/counter-timer-img.png';
import Clock from '~/components/UI/Clock';

const initialState = {
  bestSales: [],
  trendingProducts: [],
  mobileProducts: [],
  wirelessProducts: [],
  popularCategories: []
};

const Home = () => {
  const [products, setProducts] = useState(initialState);

  useEffect(() => {
    const trendingProducts = dataProducts.filter(({ category }) => category === 'chair');
    const bestSales = dataProducts.filter(({ category }) => category === 'sofa');
    const mobileProducts = dataProducts.filter(({ category }) => category === 'mobile');
    const wirelessProducts = dataProducts.filter(({ category }) => category === 'wireless');
    const popularCategories = dataProducts.filter(({ category }) => category === 'watch');

    setProducts({
      trendingProducts,
      bestSales,
      mobileProducts,
      wirelessProducts,
      popularCategories
    });
  }, []);

  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <motion.section
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ducimus placeat sit
                  neque quis quia ex unde aspernatur delectus dignissimos sint voluptas accusamus
                  ratione nesciunt deleniti ut. Consectetur, numquam saepe?
                </p>
                <motion.button whileTap={{ scale: 1.1 }} className="btn__shop">
                  <Link to={`/${PATHS.shop}`}>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={products.trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={products.bestSales} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="btn__shop btn__store">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6">
              <img src={counterImg} alt="timer counter img" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={products.mobileProducts} />
            <ProductsList data={products.wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular in Categories</h2>
            </Col>
            <ProductsList data={products.popularCategories} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
