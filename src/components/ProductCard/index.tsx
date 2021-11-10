import React, { useState } from 'react';
import './styles.scss';
import Star from '../../assets/icons/149220.svg';
import StarYellow from '../../assets/icons/start.svg';

interface IProductCardProps {
  image: string;
  time: string;
  title: string;
  qualification: number;
  price: number;
  onPress?: () => void;
}

function ProductCard({
  image,
  time,
  title,
  qualification,
  price,
  onPress,
}: IProductCardProps): JSX.Element {
  const [ifActive, setIfActive] = useState(false);

  return (
    <div className="card btn-green-tr">
      <div className="card__image">
        <div className="time">
          <label htmlFor="">{time}</label>
        </div>
        <img src={image} alt="" className="image" onClick={onPress} />
      </div>
      <div className="card__content">
        <label htmlFor="" className="titleCard">
          {title}
        </label>
        <div className="featuresContent">
          <button onClick={() => setIfActive(!ifActive)}>
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
            • ${price}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
