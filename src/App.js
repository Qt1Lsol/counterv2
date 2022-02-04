import "./App.css";
import { useState } from "react";
// import counter from "./components/Counter";

function App() {
  const [tab, setTab] = useState([]);

  const handleClick = () => {
    // Créer une copie de tab
    const newTab = [...tab];

    newTab.push(
      <p>Counter</p>,
      <button onClick={handleClickPlus}>+</button>,
      <button onClick={handleClickReset}>reset</button>,
      <button onClick={handleClickMinos}>-</button>
    );

    setTab(newTab);
  };

  const handleClickPlus = () => {};
  const handleClickReset = () => {};
  const handleClickMinos = () => {};

  return (
    <div>
      <button onClick={handleClick}>Add Counter</button>

      <div className="cl-counter">
        {tab.map((elem, index) => {
          return <div>{elem}</div>;
        })}

        <div>
          <p>Counter</p>
        </div>
        <div>
          <button onClick={handleClickPlus}>+</button>
        </div>
        <div>
          <button onClick={handleClickReset}>reset</button>
        </div>
        <div>
          <button onClick={handleClickMinos}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
