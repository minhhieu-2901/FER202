import logo from "./logo.svg";
import "./App.css";
import ES6 from "../src/Slot1/ES6";
import Ex1 from "../src/Slot1/Excercise/ex1";
import TypesExample from "./Slot3/React-Bootstrap";

import User from "./Slot3/Demo-Props";
import StateObject from "./Slot3/Demo-State";
// import Test from "./Slot3/Demo-State";
// import Counter from "./Slot3/Demo-State";
// import Toggle from "./Slot3/Demo-State";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <>
      {/* <User name="John" age={30} address="123 Main St" onClick={handleClick} /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <Test /> */}
      <StateObject />
    </>
  );
}

export default App;
