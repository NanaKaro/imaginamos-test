import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Delivery from "../../components/Delivery";
import CategorySection from "../../components/CategorySection";
import ProductCard from "../../components/ProductCard";
import OrderDetails from "../../components/OrderDetails";
import OrderList from "../../components/OrderList";
import TotalOrder from "../../components/TotalOrder";
import { getProducts, IProducts } from "../../services/products";
import { getCategories, ICategory } from "../../services/categories";

import "./styles.scss";

function Home() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts();
      setProducts(response);
    }

    async function fetchCategories() {
      const response = await getCategories();
      setCategories(response);
    }

    fetchCategories();
    fetchProducts();
  }, []);


  return (
    <div className="container">
      <div className="container__content">
        <Navbar />
        <Delivery />
        <CategorySection categories={categories} />
        <div className="container__content__cards">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              image={product.image}
              time={product.time}
              qualification={product.qualification}
              title={product.name}
            />
          ))}
        </div>
      </div>
      <div className="container__sideBar">
        <OrderDetails />
        <div className="listOrder">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
        <TotalOrder />
      </div>
    </div>
  );
}

export default Home;
