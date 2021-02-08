import React, { useState } from "react";


const Categories = React.memo(
  function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);
  
    const onSelectItem = (idx) => {
      setActiveItem(idx);
      onClickItem(idx);
    };
  
    return (
      <div className="categories">
        <ul>
          <li
            onClick={() => onSelectItem(null)}
            className={activeItem === null ? "active" : ""}
          >
            Все
          </li>
          {items &&
            items.map((name, idx) => (
              <li
                className={activeItem === idx ? "active" : ""}
                onClick={() => onSelectItem(idx)}
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


export default Categories;
