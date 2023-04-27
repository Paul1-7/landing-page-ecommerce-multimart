import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import '~/styles/commonSection.css';

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

CommonSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default CommonSection;
