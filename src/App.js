import React from "react";
import Clock from "./Clock";
import Input from "./Input";
import Input2 from "./Input2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* 1. Transform Clock into functional component */}
      <Clock />
      <br />
      {/* 2. Implement debounce-to-search */}
      <Input />
      <br />
      {/* 3. Implement debounce-to-search(use lodash) */}
      <Input2 />
    </div>
  );
}
