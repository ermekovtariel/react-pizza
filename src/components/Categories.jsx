import React from "react";
import { PropTypes } from 'prop-types';


const Categories = React.memo(
  function Categories({ activeCategoryIndex, items, onClickCategory }) {
  

  
    return (
      <div className="categories">
        <ul>
          <li
            onClick={() => onClickCategory(null)}
            className={activeCategoryIndex === null ? "active" : ""}
          >
            Все
          </li>
          {items &&
            items.map((name, idx) => (
              <li
                className={activeCategoryIndex === idx ? "active" : ""}
                onClick={() => onClickCategory(idx)}
                key={`${name}_${idx}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
)
Categories.propTypes = {
  // activeCategoryIndex: PropTypes.oneOf([PropTypes.number, null]), 
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes
};

Categories.defaultProps = { 
  activeCategoryIndex: null, 
  items: []
}

export default Categories;
