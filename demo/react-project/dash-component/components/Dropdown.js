import React from "react";
const Dropdown = props => {
  const {
    value,
    options,
    setProps
  } = props;
  const [selectedLabel, setSelectedLabel] = React.useState("Select");
  const [selectedValue, setSelectedValue] = React.useState(value || "");
  const [showDropdown, setShowDropdown] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative selection:select-none p-10 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 right-0 bottom-0 -z-10",
    onClick: () => setShowDropdown(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-[200px] rounded-md p-2 flex items-center justify-between relative cursor-pointer",
    style: {
      border: "1px solid #ccc"
    },
    onClick: () => setShowDropdown(!showDropdown)
  }, /*#__PURE__*/React.createElement("p", null, selectedLabel), /*#__PURE__*/React.createElement("div", {
    className: showDropdown ? "transition-all transform rotate-180" : "transition-all"
  }, /*#__PURE__*/React.createElement("svg", {
    height: "30",
    viewBox: "0 0 50 50",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 20l10 10 10-10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h48v48h-48z",
    fill: "none"
  }))), /*#__PURE__*/React.createElement("div", {
    className: `transition-all duration-300 ease-in-out absolute top-12 left-0 right-0 bg-white  overflow-hidden overflow-y-scroll shadow-md z-50 ${showDropdown ? "max-h-60" : "max-h-0"}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: ""
  }, options.map((option, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: "p-2 hover:bg-gray-200",
    onClick: () => {
      setSelectedValue(option?.value);
      setShowDropdown(false);
      setSelectedLabel(option?.label);
      setProps && setProps({
        value: option?.value
      });
    }
  }, option?.label))))));
};
export default Dropdown;