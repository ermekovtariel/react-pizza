import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, SortPopup, PizzaBlock } from "../components";

import { setCategory } from "../redux/actions/filters";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const categoryNames = [
    "мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];
  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
//http://localhost:3000/pizzas?_order=asc&_sort=price
  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          onClickItem={onSelectCategory} 
          items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
