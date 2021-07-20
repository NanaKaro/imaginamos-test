import React from 'react';
import classnames from 'classnames';
import './styles.scss';

interface ICategoryButtonProps {
  name: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

function CategoryButton({
  name,
  image,
  active,
  onClick,
}: ICategoryButtonProps): JSX.Element {
  const buttonClassnames = classnames('categoryButton', { active });

  return (
    <button className={buttonClassnames} onClick={onClick}>
      <div className="categoryButton__image">
        <img src={image} alt="" />
      </div>
      <div className="categoryButton__text">
        <label htmlFor="">{name}</label>
      </div>
    </button>
  );
}

export default CategoryButton;
