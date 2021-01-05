import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>using React & Redux</h4>
        <div className="quantity">
          <a
            className="quantity__minus"
            onClick={() => dispatch(decNumber())}
            title="Decrement"
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            onClick={() => dispatch(incNumber())}
            title="Increment"
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
