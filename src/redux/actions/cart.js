import pizzas from "../reducers/pizzas";

export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZAS_CART',
    payload: pizzaObj,
})