import React from "react";

function Input() {
  const timer = React.useRef();

  const handleChange = (e) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      console.log("call search api with: " + e.target.value);
    }, 1000);
  };
  return <input onChange={handleChange} />;
}

export default Input;
