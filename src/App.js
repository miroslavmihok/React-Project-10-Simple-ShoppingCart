import React, { useReducer } from "react";

import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(reducer, []);

  const addItemToCart = item => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItemFromCart = id => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const products = [
    { id: Math.random().toString(), name: "Product 1", price: 10 },
    { id: Math.random().toString(), name: "Product 2", price: 20 },
    { id: Math.random().toString(), name: "Product 3", price: 30 }
  ];

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart Items</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        Total Items in Cart: {cart.length}
      </div>
    </div>
  );
}

export default App;