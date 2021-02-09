import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: 'desc' },
  { name: "цене", type: "price", order: 'desc' },
  { name: "алфавиту", type: "name", order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    //Remove to redux and connect redux-thunk
    //Looking for filter and sort, and put URL parametrs from redux
    //Make a imitation loading pizzas like a skeleton(what have in css)   
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy]);

  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);
  
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          activeCategoryIndex={category} 
          onClickCategory={onSelectCategory} 
          items={categoryNames} />
        <SortPopup 
          activeSortType={sortBy.type} 
          items={sortItems} 
          onClickSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
        ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        : Array(12).fill(0).map((_,idx)=><PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
}

export default Home;
