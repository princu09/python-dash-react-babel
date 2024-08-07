import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <React.Fragment>
      <Dropdown
        options={[
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
          {
            label: "Option 3",
            value: "option3",
          },
        ]}
      />
    </React.Fragment>
  );
}
