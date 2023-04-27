import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import products from '~/assets/data/products';
import Helmet from '~/components/helmet/Helmet';
import CommonSection from '~/components/UI/CommonSection';
import { motion } from 'framer-motion';
import '~/styles/productDetail.css';
import { useState } from 'react';

const TABS = [
  {
    name: 'Description',
    isActive: true
  },
  {
    name: `Reviews`,
    isActive: false
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(TABS);

  const product = products.find(({ id: idProduc }) => idProduc === id);
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product;

  const handleTap = (indexValue) => {
    const newTab = TABS.map((item, index) => {
      return indexValue === index ? { ...item, isActive: true } : { ...item, isActive: false };
    });

    setTab(newTab);
  };

  return (
    <Helmet title="Product detail">
      <CommonSection title="Product detail" />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="3">
              <img src={imgUrl} alt="product image" />
            </Col>
            <Col lg="6" md="3">
              <div className="product__detail">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>{avgRating} ratings</p>
                </div>
                <p className="product__price">$ {price}</p>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.1 }} className="btn__shop">
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                {tab.map(({ name, isActive }, index) => (
                  <h6
                    key={index}
                    className={`${isActive ? 'active__tab' : ''}`}
                    onClick={() => handleTap(index)}>
                    {name}
                  </h6>
                ))}
              </div>

              {tab.map(({ name, isActive }) => {
                if (isActive && name === 'Description')
                  return <p className="tab__content mt-5">{description}</p>;
                if (isActive && name === 'Reviews')
                  return (
                    <div className="review mt-5">
                      <section className="review__wrapper">
                        <ul>
                          {reviews?.map(({ rating, text }) => (
                            <li key={rating}>
                              <h6 className="mb-4">Jhon Doe</h6>
                              <span>{rating} (average rating)</span>
                              <p className="mt-2">{text}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="review__form">
                          <h4>leave your experience</h4>
                          <form action="">
                            <div className="form-group">
                              <input type="text" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                              <span>
                                1<i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                2<i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                3<i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                4<i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                5<i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <div className="form-group">
                              <input type="text" placeholder="Review message" />
                            </div>
                          </form>
                        </div>
                      </section>
                    </div>
                  );
              })}

              {/* <p className="tab__content mt-5">{description}</p> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
