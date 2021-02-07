import React from "react";
import axios from "axios";

import { Route } from "react-router-dom";  
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    //>>>>>>axios<<<<<<
    axios.get('http://localhost:3000/db.json')
    .then(({data})=>{setPizzas(data.pizzas)})
    //>>>>>>fetxh<<<<<<
    // fetch('http://localhost:3000/db.json')
    // .then((resp)=>resp.json())
    // .then(json=>setPizzas(json.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={()=><Home items={pizzas}/>} exact/>
        <Route path='/Cart' component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;
