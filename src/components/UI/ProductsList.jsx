import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </>
  );
};

ProductsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default ProductsList;
