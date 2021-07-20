import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import Select from "../Select";
import Image from "../../assets/icons/1046784.svg";
import CategoryButton from "../CategoryButton";
import SeeMoreLeft from "../../assets/icons/118740.svg";
import SeeMoreRight from "../../assets/icons/izq.svg";
import { ICategory } from "../../services/categories";

interface ICategorySectionProps {
  categories: ICategory[];
  onSelectedCategory: (idCategory: number) => void;
}

function CategorySection({
  categories,
  onSelectedCategory,
}: ICategorySectionProps): JSX.Element {
  const [categoryIdSelected, setCategoryIdSelected] = useState<number>();
  const categoryListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categories.length >= 1 && !categoryIdSelected) {
      setCategoryIdSelected(categories[0].id);
    }
  }, [categories, categoryIdSelected]);

  const scroll = (direction: number) => {
    if (categoryListRef.current) {
      let far = (categoryListRef.current.offsetWidth / 4) * direction;
      let pos = categoryListRef.current.scrollLeft + far;
      categoryListRef.current.scrollTo(pos, far);
    }
  };

  return (
    <div className="category">
      <div className="category__seeMore category__seeMore--right">
        <img src={SeeMoreRight} alt="" onClick={() => scroll(-1)} />
      </div>
      <div className="category__title">
        <div className="text">
          <label>Restaurants</label>
          <img src={Image} alt="" />
        </div>
        <Select />
      </div>
      <div className="category__list" ref={categoryListRef}>
        {categories.map((categories) => (
          <CategoryButton
            key={categories.id}
            active={categories.id === categoryIdSelected}
            onClick={() => {
              setCategoryIdSelected(categories.id);
              onSelectedCategory(categories.id);
            }}
            image={categories.icon}
            name={categories.name}
          />
        ))}
      </div>
      <div className="category__seeMore">
        <img src={SeeMoreLeft} alt="" onClick={() => scroll(1)} />
      </div>
    </div>
  );
}

export default CategorySection;
