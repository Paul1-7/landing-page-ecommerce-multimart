import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import data from '~/assets/data/products';
import Helmet from '~/components/helmet/Helmet';
import CommonSection from '~/components/UI/CommonSection';
import ProductsList from '~/components/UI/ProductsList';
import '~/styles/shop.css';

const initialCriteria = {
  filterByCategory: '',
  orderBy: ''
};

const Shop = () => {
  const [criteria, setcriteria] = useState(initialCriteria);
  const [products, setProducts] = useState(data);

  const handleSearch = ({ target }) => {
    const { value } = target;

    const productsFiltered = data.filter(
      ({ productName, category }) =>
        productName.toLowerCase().includes(value.toLowerCase()) &&
        (criteria.filterByCategory === category || !criteria.filterByCategory.length)
    );

    setProducts(value.length ? productsFiltered : data);
  };

  const handleFilterByCategory = ({ target }) => {
    const { value } = target;
    setcriteria({ ...initialCriteria, filterByCategory: value });

    const productsFiltered = value.length
      ? data.filter(({ category }) => category.toLowerCase() === value.toLowerCase())
      : data;

    setProducts(productsFiltered);
  };

  const handleOrderBy = ({ target }) => {
    const { value } = target;

    const productsSorted = data.sort(({ productName: a }, { productName: b }) => a - b);
    setProducts(productsSorted);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilterByCategory}>
                  <option value="">Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="order__widget">
                <select name="order" onChange={handleOrderBy}>
                  <option value="">Order by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input type="text" placeholder="Search..." onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            {products.length ? (
              <ProductsList data={products} />
            ) : (
              <article className="product-not-found">
                <h2>Product not found</h2>
              </article>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
