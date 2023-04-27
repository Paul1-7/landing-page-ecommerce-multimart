import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6} className="mb-4">
            <h4 className="text-white  text-center ">Multimart</h4>
            <p className="footer__text mt-4  text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae
              expedita sit cupiditate pariatur distinctio, error fugiat totam vel aperiam saepe
            </p>
          </Col>
          <Col lg={3} md={6} sm={6} className="mb-4">
            <div className="footer__quick_links">
              <h4 className="quick__links-title text-center">Top Categories</h4>
              <ListGroup className="mb-3 ">
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="#">Mobiles Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="#">Modern sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={2} md={6} sm={6} className="mb-4">
            <div className="footer__quick_links">
              <h4 className="quick__links-title text-center">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="mb-4">
            {' '}
            <div className="footer__quick_links">
              <h4 className="quick__links-title text-center">Contact</h4>
              <ListGroup className="mb-3 footer__contact">
                <ListGroupItem className="ps-0 border-0 text-center d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123, ZindaBazar, Syhet, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>example@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 text-center d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+81 16848917</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg={12}>
            <p className="footer__copyright">Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
