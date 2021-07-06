import React from "react";
import "./styles.scss";
import ImageProducto from "../../assets/images/pexels-photo-156114.jpeg"


function OrderList() {
  return (
    <div className="orderList">
        <div className="orderList__item">
            <img src={ImageProducto} alt="" />
            <div className="description">
                <label htmlFor="" className="description__label">1</label>
                <span className="description__label">x</span>
                <label htmlFor="" className="description__label">Beach BBQBurger</label>
            </div>
            <label htmlFor="" className="price">$14.99</label>
        </div>
    </div>
  );
}

export default OrderList;