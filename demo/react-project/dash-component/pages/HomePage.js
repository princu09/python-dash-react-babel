import React from "react";
export default function HomePage() {
  const tabMenuList = ["General", "Profile", "Security", "Notification", "Billing"];
  const [activeMenu, setActiveMenu] = React.useState("General");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "py-10 px-20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-semibold text-accent"
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-10"
  }, tabMenuList.map(menu => /*#__PURE__*/React.createElement("div", {
    key: menu,
    className: `px-5 py-2 cursor-pointer flex items-center rounded-md ${activeMenu === menu ? "bg-accent !text-[#fff] text-xs" : ""}`,
    onClick: () => setActiveMenu(menu)
  }, menu))), activeMenu === "General" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-accent mb-5"
  }, "General settings"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat, architecto neque sequi sapiente maiores laborum quam deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil suscipit repellendus impedit! Vel nihil totam illum praesentium eveniet quidem tempore omnis soluta animi dolorum provident aut libero, numquam magni, eum veritatis ab voluptatem ducimus.")), activeMenu === "Profile" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-accent mb-5"
  }, "Profile settings"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat, architecto neque sequi sapiente maiores laborum quam deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil suscipit repellendus impedit! Vel nihil totam illum praesentium eveniet quidem tempore omnis soluta animi dolorum provident aut libero, numquam magni, eum veritatis ab voluptatem ducimus.")), activeMenu === "Security" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-accent mb-5"
  }, "Security settings"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat, architecto neque sequi sapiente maiores laborum quam deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil suscipit repellendus impedit! Vel nihil totam illum praesentium eveniet quidem tempore omnis soluta animi dolorum provident aut libero, numquam magni, eum veritatis ab voluptatem ducimus.")), activeMenu === "Notification" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-accent mb-5"
  }, "Notification settings"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat, architecto neque sequi sapiente maiores laborum quam deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil suscipit repellendus impedit! Vel nihil totam illum praesentium eveniet quidem tempore omnis soluta animi dolorum provident aut libero, numquam magni, eum veritatis ab voluptatem ducimus.")), activeMenu === "Billing" && /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-accent mb-5"
  }, "Billing settings"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat, architecto neque sequi sapiente maiores laborum quam deleniti assumenda maxime mollitia, aspernatur nobis odio, nihil suscipit repellendus impedit! Vel nihil totam illum praesentium eveniet quidem tempore omnis soluta animi dolorum provident aut libero, numquam magni, eum veritatis ab voluptatem ducimus."))));
}