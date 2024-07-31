import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
    </React.Fragment>
  );
}
