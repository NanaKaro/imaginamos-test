import React, { useState, useEffect } from "react";
import "./styles.scss";
import classnames from "classnames";
import Star from "../../assets/icons/149220.svg";
import StarYellow from "../../assets/icons/start.svg";

interface IProductCardProps {
  id: number;
  image: string;
  time: string;
  title: string;
  qualification: number;
}

function ProductCard({
  id,
  image,
  time,
  title,
  qualification,
}: IProductCardProps): JSX.Element {
  const [ifActive, setIfActive] = useState(false);

  return (
    <div className="card">
      <div className="card__image">
        <div className="time">
          <label htmlFor="">{time}</label>
        </div>
        <img src={image} alt="" className="image" />
      </div>
      <div className="card__content">
        <label htmlFor="" className="titleCard">
          {title}
        </label>
        <div className="featuresContent">
          <button
            onClick={() => setIfActive(!ifActive)}
          >
            {ifActive && <img src={StarYellow} alt="" />}
            {!ifActive && <img src={Star} alt="" />}
          </button>
          <label htmlFor="" className="score">
            {qualification}
          </label>
          <label htmlFor="" className="tags">
            Deli
          </label>
          <label htmlFor="" className="tags">
            • Bagels
          </label>
          <label htmlFor="" className="tags">
            • $$
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
