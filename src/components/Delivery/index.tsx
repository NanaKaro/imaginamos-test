import React from "react";
import "./style.scss";
import Img from "../../assets/images/headerimage.png";
import ImgRight from "../../assets/icons/109617.svg";
import ImgIcon from "../../assets/images/d.png";

function Delivery() {
  return (
    <div className="deliveryContent">
        <div className="deliveryContent__imageContent">
            <img src={Img} alt="" />
        </div>
        <div className="deliveryContent__textContent">
            <div className="body">
                <label className="bigtext">$0 delivery for 30 days! <img src={ImgIcon} alt="" /></label>
                <label className="disclaimer">$0 delivery fee for orders over $10 for 30 days</label>
            </div>
            <div className="footer">
                <a>learn more
                    <img src={ImgRight} alt="" />
                </a>
            </div>
        </div>
    </div>
  );
}

export default Delivery;