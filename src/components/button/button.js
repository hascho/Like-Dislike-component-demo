import * as React from "react";

export const Button = (props) => {
  const { text, count, highlight, onClick } = props;
  return (
    <button
      style={highlight ? { border: "3px solid black" } : undefined}
      onClick={onClick}
    >
      {text} | <span>{count}</span>
    </button>
  );
};
