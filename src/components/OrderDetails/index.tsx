import React from "react";
import "./styles.scss";
import User from "../../assets/icons/747376.svg";
import Emogi from "../../assets/icons/emoji.png";
import Clock from "../../assets/icons/clockYellow.svg";

function OrderDetail() {
  return (
    <div className="orderDetails">
        <div className="orderDetails__quantityContainer">
            <img src={User} alt="" />
            <div className="quantity">
                <span>3</span>
            </div>
        </div>
        <div className="orderDetails__title">
            <label htmlFor="" className="">My 
                <img src={Emogi} alt="" />
            </label>
            <label htmlFor="" className="orderDetails__title">Order</label>
        </div>
        <div className="orderDetails__details">
            <div className="labels">
                 <label htmlFor="" className="white">625 St Marks Ave</label>
                 <label htmlFor="" className="yellow">Edit</label>
            </div>
            <div className="labels labels--noMargin">
                <div className="labels__image">
                    <div className="timeIcon">
                        <img src={Clock} alt="" /> 
                    </div>
                    <label htmlFor="" className="white">35 min</label>
                </div>
                 <label htmlFor="" className="yellow">Choose time</label>
            </div>
        </div>
        
    </div>
  );
}

export default OrderDetail;