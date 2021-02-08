import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //remove to redux and connect redux-thunk
    //looking for filter and sort, and put URL parametrs from redux
    //make a imitation loading pizzas like a skeleton(what have in css)   
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/Cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
