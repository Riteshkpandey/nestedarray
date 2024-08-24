import { useState } from "react";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState("");
  const [str, setstr] = useState("");
  const onHandleValue = (val) => {
    if (str.includes(val)) {
      const index = str.indexOf(val);
      const newStr = str.slice(0, index) + str.slice(index + 3);
      setstr(() => val + "->" + newStr);
    } else setstr((prev) => prev + val + "->");
    setDisplay(str);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={(e) => onHandleValue(e.target.innerText)}>A</button>
      <button onClick={(e) => onHandleValue(e.target.innerText)}>B</button>
      <button onClick={(e) => onHandleValue(e.target.innerText)}>C</button>
      <button onClick={(e) => onHandleValue(e.target.innerText)}>D</button>
      {display}
    </div>
  );
}
