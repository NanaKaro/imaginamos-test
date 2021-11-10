import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Navbar from '../../components/Navbar';
import Delivery from '../../components/Delivery';
import CategorySection from '../../components/CategorySection';
import ProductCard from '../../components/ProductCard';
import OrderDetails from '../../components/OrderDetails';
import OrderList from '../../components/OrderList';
import TotalOrder from '../../components/TotalOrder';
import OrderModal from '../../components/OrderModal';
import Footer from '../../components/Footer';
import { getProducts, IProducts } from '../../services/products';
import { getCategories, ICategory } from '../../services/categories';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import './styles.scss';

function Home(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState<number>(1);
  const [productSelected, setProductSelected] = useState<IProducts>();
  const orderTotal = useSelector((state: RootState) => state.order.total);
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );
  const user = useSelector((state: RootState) => state.user.data);

  const sideBarClasses = classNames('container__sideBar', {
    'container__sideBar--close': !isSideBarOpen,
  });
  const homeContainer = classNames('container__content', {
    'container__content--close': !isSideBarOpen,
  });

  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts();
      setProducts(response);
    }

    async function fetchCategories() {
      const response = await getCategories();
      setCategories(response);
    }

    void fetchCategories();
    void fetchProducts();
  }, []);

  useEffect(() => {
    if (categorySelected === 1) {
      setFilteredProducts(products);
    } else {
      const newProductsFiltered = products.filter(
        (product) => product.categoryId === categorySelected
      );
      setFilteredProducts(newProductsFiltered);
    }
  }, [categorySelected, products]);

  useEffect(() => {
    if (orderTotal) {
      setIsSideBarOpen(true);
      setIsModalOpen(false);
    }
  }, [orderTotal]);

  return (
    <div>
      <div className="container" id="modal">
        <div className={homeContainer}>
          <Navbar onMenuClick={() => setIsSideBarOpen(!isSideBarOpen)} />
          {isUserLoggedIn && (
            <label htmlFor="" className="text--xlarge text__align--center">
              Hola, {user?.name}
            </label>
          )}

          <Delivery />
          <CategorySection
            categories={categories}
            onSelectedCategory={(idCategory) => setCategorySelected(idCategory)}
          />
          <div className="container__content__cards">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                onPress={() => {
                  setIsModalOpen(!isModalOpen);
                  setProductSelected(product);
                }}
                image={product.image}
                time={product.time}
                qualification={product.qualification}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
        <div className={sideBarClasses}>
          <OrderDetails />
          <div className="listOrder">
            <OrderList />
          </div>
          <TotalOrder />
        </div>
        {productSelected && isModalOpen && (
          <OrderModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick
            product={productSelected}
          />
        )}
      </div>
      {!isUserLoggedIn && <Footer />}
    </div>
  );
}

export default Home;
