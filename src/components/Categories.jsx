import React, {useState} from "react";

function Categories({ items }) {
    const [activeItem,setActiveItem]=useState(null)

    return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, idx) => (
          <li 
            className={activeItem===idx?'active':''}
            onClick={()=>setActiveItem(idx)} 
            key={`${name}_${idx}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
