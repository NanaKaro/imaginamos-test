import React from "react";
import "./styles.scss";
import Img from "../../assets/icons/126474.svg";

function Input() {
  return (
    <div className="containerSearch">
      <input className="Input" placeholder="Search" />
      <img className="Input__search" src={Img} alt=""></img>
    </div>
  );
}

export default Input;
