import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import Routers from '~/routes';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
