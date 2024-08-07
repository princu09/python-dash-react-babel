import React from "react";

export default function Input(props) {
  const { text, setProps } = props;
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setProps({ text: e.target.value })}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
