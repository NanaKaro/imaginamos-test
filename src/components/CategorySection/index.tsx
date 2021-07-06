import React, { useState, useEffect } from "react";
import "./styles.scss";
import Select from "../Select";
import Image from "../../assets/icons/1046784.svg";
import CategoryButton from "../CategoryButton";
import SeeMore from "../../assets/icons/118740.svg";
import { ICategory } from "../../services/categories";

interface ICategorySectionProps {
  categories: ICategory[];
}

function CategorySection({ categories }: ICategorySectionProps): JSX.Element {
  const [categoryIdSelected, setCategoryIdSelected] = useState<number>();

  useEffect(() => {
    if(categories.length >= 1 && !categoryIdSelected){
      setCategoryIdSelected(categories[0].id);
    }
  }, [categories, categoryIdSelected]);

  return (
    <div className="category">
      <div className="category__title">
        <div className="text">
          <label>Restaurants</label>
          <img src={Image} alt="" />
        </div>
        <Select />
      </div>
      <div className="category__list">
        {categories.map((categories) => (
          <CategoryButton
            key={categories.id}
            active={categories.id === categoryIdSelected}
            onClick={() => setCategoryIdSelected(categories.id)}
            image={categories.icon}
            name={categories.name}
          />
        ))}
      </div>
      <div className="category__seeMore">
        <img src={SeeMore} alt="" />
      </div>
    </div>
  );
}

export default CategorySection;
