import { motion } from 'framer-motion';
import '~/styles/productCard.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
        quantity: 1
      })
    );
    toast.success('product add to cart!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light'
    });
  };

  return (
    <Col lg="3" md="4" sm={6} className="mb-2">
      <motion.div whileHover={{ scale: 1.03 }} className="product__item">
        <div className="product__img">
          <img src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addItemToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired
};
export default ProductCard;
