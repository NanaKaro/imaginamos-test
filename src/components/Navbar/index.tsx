import React from "react";
import "./styles.scss";
import Input from "../../components/Input"
import ImgMenu from "../../assets/icons/menu.svg"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <img src={ImgMenu} alt="" />
        <label>Chukwudi</label>
      </div>
       <Input />
    </div>
  );
}

export default Navbar;