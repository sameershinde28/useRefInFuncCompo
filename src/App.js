import "./styles.css";
import React, { useRef } from "react";

export default function App() {
  let inputRef = useRef(1999);

  function handleInput() {
    console.log("sameer");
    // inputRef.current.value="100";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
    inputRef.current.style.display = "none";
  }

  return (
    <div className="App">
      <h1>ref in class component</h1>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleInput}>click me</button>
    </div>
  );
}
