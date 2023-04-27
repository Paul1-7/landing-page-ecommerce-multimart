import { Col, Container, Row } from 'reactstrap';
import './services.css';
import serviceData from '~/assets/data/serviceData';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          {serviceData.map(({ icon, title, subtitle, bg }, index) => (
            <Col lg="3" md="4" sm={6} key={index} style={{ marginBottom: '.75rem' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="service__item"
                style={{ backgroundColor: bg }}>
                <span>
                  <i className={icon}></i>
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
