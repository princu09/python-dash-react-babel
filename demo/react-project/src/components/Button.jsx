import React from "react";

export default function Button(props) {
  const { text, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
