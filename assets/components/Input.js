import React from "react";
const _jsx = React.createElement;

export default function Input(props) {
  const { text, setProps } = props;
  return /*#__PURE__*/ _jsx("div", {
    children: _jsx("input", {
      type: "text",
      value: text,
      onChange: (e) =>
        setProps({
          text: e.target.value,
        }),
      className: "border border-gray-300 rounded-md p-2",
    }),
  });
}
