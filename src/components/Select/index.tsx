import React from "react";
import "./styles.scss";
import Img from "../../assets/icons/149316.svg"

function Select() {
  return (
    <div className="containerSelect">
        <select className="select">
            <option className="option" value="0">Delivery: Now</option>
            <option value="1">Tomorrow</option>
            <option value="2">Soon</option>
        </select>
        <img className="select__icon" src={Img} alt="" ></img>
    </div>
  );
}

export default Select;