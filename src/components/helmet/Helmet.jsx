import PropTypes from 'prop-types';

const Helmet = ({ title, children }) => {
  document.title = `Multimart - ${title}`;
  return <div className="w-100">{children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Helmet;
